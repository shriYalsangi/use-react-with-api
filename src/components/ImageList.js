import "./ImageList.css"
import ImageShow from "./ImageShow";

const ImageList = ({images}) => {

    const renderImages = images.map((image) => {
        return <ImageShow image={image} key={image.id} />
    })

    return (
        <div className="image-list">
            {renderImages}
        </div>
    )
}

export default ImageList;
