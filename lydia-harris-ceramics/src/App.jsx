import Header from './Header.jsx'
import Footer from './Footer.jsx'
import GalleryCard from './GalleryCard.jsx'

function App() {

    return(
        <>
            <Header></Header>
            <GalleryCard title="Beautiful Pottery" desc="Something beautiful that Lydia made" imgLink="https://www.rockgardenpottery.com/wp-content/uploads/2019/04/Pottery-And-Ceramics-1024x683.jpg" altText="Some beautiful Pottery"/>
            <GalleryCard/>
            <Footer></Footer>
        </>
    );
  
}

export default App
