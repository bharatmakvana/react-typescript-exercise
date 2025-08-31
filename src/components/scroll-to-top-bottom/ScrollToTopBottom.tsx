import React, { useRef } from 'react';

const ScrollToTopBottom = () => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleToTopScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }


  const handleToBottomScroll = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
    <>
    <br/><br/><br/>
    <button onClick={handleToBottomScroll}>Scroll Bottom</button>
    <h1>Headline H1</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?</p>
    <h2>Headline H2</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?</p>
    <h3>Headline H3</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?</p>
    <h4>Headline H4</h4>
    <div ref={bottomRef}></div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem illum dolores maxime veniam quis omnis dolorem saepe, ut nesciunt, repudiandae odio sapiente aliquid libero aliquam. Repellat illo excepturi molestias?</p>
    <button onClick={handleToTopScroll}>Scroll Top</button>
    <h3>This is the bottom of the page</h3>
    </>
  )
}

export default ScrollToTopBottom;