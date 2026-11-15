import HTMLFlipBook from "react-pageflip";
import { forwardRef } from "react";

const Page = forwardRef(({ memory }, ref) => {

    return (

        <div ref={ref} className="flip-page">

            <div className="page-paper">

                <div className="page-tape left"></div>

                <div className="page-tape right"></div>

                <img
                    src={memory.image}
                    alt={memory.title}
                    className="page-image"
                />

                <h2>{memory.title}</h2>

                <p>{memory.note}</p>

                <span className="page-number">

                    ❤️

                </span>

            </div>

        </div>

    );

});

export default function ScrapbookBook({ memories }) {

    return (

        <HTMLFlipBook

            width={350}
            height={560}
            size="stretch"
            minWidth={280}
            maxWidth={450}
            minHeight={500}
            maxHeight={650}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            drawShadow={true}
            flippingTime={900}

        >

            {memories.map(memory => (

                <Page
                    key={memory.id}
                    memory={memory}
                />

            ))}

        </HTMLFlipBook>

    );

}