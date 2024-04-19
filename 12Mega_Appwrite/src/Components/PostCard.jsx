//paste the code from chai aur react github
import Service from "../AppWrite/configure" 
import {Link} from "react-router-dom"

function PostCard({$id, featuredImage, title}) {
  return (
    <Link to={`/posts/${$id}`}>
    <div>
      <div>
        {/* here image will have its own different id and post card will have its own different id */}
        <img src={Service.getFilePreview(featuredImage)} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
    </Link>
  )
}

export default PostCard
