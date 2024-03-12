import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";
//{_id,title,summary,cover,content,createdAt,author}
export default function Post({_id,title,summary,cover,content,createdAt,author}) {

  return (
    <div className="post">
      <div className="image">
      {/* <img src="https://th.bing.com/th/id/OIP.vNpR-4DYMRCXEEpfrAzLXwHaE8?rs=1&pid=ImgDetMain" alt="img"/> */}
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} alt=""/>
          </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}