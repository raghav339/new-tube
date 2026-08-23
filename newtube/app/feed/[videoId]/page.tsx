interface PageProps{
    params:Promise<{videoId:string}>
}

export default async function VideoPage({params}:PageProps)
{
    const {videoId}=await params;
    return(
        <>
        <p>Video Page for videoId: {videoId}</p>
        </>
    )
}