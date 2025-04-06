import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from tqdm import tqdm
import re
import nltk
from nltk.corpus import stopwords
from wordcloud import WordCloud
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix, ConfusionMatrixDisplay
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier

# Download necessary NLTK data
nltk.download('punkt', quiet=True)
nltk.download('stopwords', quiet=True)

# Load the dataset
data = pd.read_csv('News.csv', index_col=0)

# Check if required columns exist before dropping
columns_to_drop = ["title", "subject", "date"]
data = data.drop(columns=[col for col in columns_to_drop if col in data.columns], axis=1)

# Check for missing values
if data.isnull().sum().any():
    print("Warning: Dataset contains missing values. Please handle them before proceeding.")

# Shuffle and reset index
data = data.sample(frac=1, random_state=42).reset_index(drop=True)

# Plot class distribution
sns.countplot(data=data, x='class', order=data['class'].value_counts().index)
plt.title("Class Distribution")
plt.show()

# Preprocess text data
def preprocess_text(text_data):
    preprocessed_text = []
    stop_words = set(stopwords.words('english'))
    
    for sentence in tqdm(text_data, desc="Preprocessing Text"):
        sentence = re.sub(r'[^\w\s]', '', sentence)  # Remove punctuation
        preprocessed_text.append(' '.join(
            token.lower() for token in str(sentence).split() if token not in stop_words
        ))
    
    return preprocessed_text

data['text'] = preprocess_text(data['text'].values)

# Generate word clouds
def generate_wordcloud(data, label, title):
    consolidated = ' '.join(word for word in data['text'][data['class'] == label].astype(str))
    wordcloud = WordCloud(width=1600, height=800, random_state=21, max_font_size=110, collocations=False)
    plt.figure(figsize=(15, 10))
    plt.imshow(wordcloud.generate(consolidated), interpolation='bilinear')
    plt.title(title)
    plt.axis('off')
    plt.show()

# Word clouds for real and fake news
generate_wordcloud(data, label=1, title="Word Cloud for Real News")
generate_wordcloud(data, label=0, title="Word Cloud for Fake News")

# Get top N words
def get_top_n_words(corpus, n=None):
    vec = CountVectorizer().fit(corpus)
    bag_of_words = vec.transform(corpus)
    sum_words = bag_of_words.sum(axis=0)
    words_freq = [(word, sum_words[0, idx]) for word, idx in vec.vocabulary_.items()]
    return sorted(words_freq, key=lambda x: x[1], reverse=True)[:n]

common_words = get_top_n_words(data['text'], 20)
df1 = pd.DataFrame(common_words, columns=['Word', 'Count'])

# Plot top words frequency
df1.set_index('Word').plot(kind='bar', figsize=(10, 6), legend=False)
plt.xlabel("Top Words")
plt.ylabel("Count")
plt.title("Bar Chart of Top Words Frequency")
plt.show()

# Split data into training and testing sets
x_train, x_test, y_train, y_test = train_test_split(data['text'], data['class'], test_size=0.25, random_state=42)

# Vectorize text data
vectorization = TfidfVectorizer()
x_train = vectorization.fit_transform(x_train)
x_test = vectorization.transform(x_test)

# Logistic Regression Model
logistic_model = LogisticRegression()
logistic_model.fit(x_train, y_train)

# Evaluate Logistic Regression Model
print("Logistic Regression Training Accuracy:", accuracy_score(y_train, logistic_model.predict(x_train)))
print("Logistic Regression Testing Accuracy:", accuracy_score(y_test, logistic_model.predict(x_test)))

# Decision Tree Model
decision_tree_model = DecisionTreeClassifier(random_state=42)
decision_tree_model.fit(x_train, y_train)

# Confusion Matrix for Decision Tree Model
cm = confusion_matrix(y_test, decision_tree_model.predict(x_test))
cm_display = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=[False, True])
cm_display.plot()
plt.title("Confusion Matrix - Decision Tree")
plt.show()