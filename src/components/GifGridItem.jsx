export const GifGridItem = ({ id, title, url}) => {
    return (
        <div className="w-60  h-80 overflow-hidden rounded m-1 shadow animate__animated animate__fadeInDown">
            <img className="w-full h-5/6 object-cover" src={url} alt={title} />
            <p className="w-full text-center py-2 text-sm">{title}</p>
        </div>
    )
}
