import './reset.css';
import './main.css';
import Article from './components/articles/Article';
import ArticleList from './components/articles/ArticleList';
import App from './components/app/App';

const root = document.getElementById('root');
const app = newApp();

root.appendChild(app.render());