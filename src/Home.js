import NewFeed from "./components/NewFeed";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
function Home(){
    return(
        <div className="home-page">
            <LeftSide/>
            <NewFeed/>
            <RightSide/>
        </div>
    );
}
export default Home;