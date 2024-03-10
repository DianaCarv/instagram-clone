import { Header } from "../../../components/Header/Header"
import { PostCard } from "../../../components/PostCard/PostCard"
import ImageListData from '../../../mock-data/images.json'
import "./home.css"

export const Home = () => {
    return (
        <div>
            <Header />
            <div className="container-post-card">
            <PostCard mediaList={ImageListData} />
            </div>
            
        </div>
        
    )
}