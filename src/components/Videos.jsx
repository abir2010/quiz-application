import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

export default function Videos() {
    const [page, setPage] = useState(1);

    const { videos, loading, error, hasMore } = useVideoList(page);

    return (
        <div>
            {videos.length > 0 && (
                <InfiniteScroll
                    dataLength={videos.length}
                    hasMore={hasMore}
                    next={() => setPage(page + 8)}
                >
                    {videos.map((video) => (
                        <Video
                            key={video.youtubeID}
                            title={video.title}
                            id={video.youtubeID}
                            noq={video.noq}
                        />
                    ))}
                </InfiniteScroll>
            )}

            {!loading && videos.length === 0 && (
                <div className="">No data found :(</div>
            )}

            {error && <div className="">There was an error :((</div>}

            {loading && <div>loading...</div>}
        </div>
    );
}
