import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';

const QUOTES = [
  {text: '今天的科学，就是明天的技术。', author: 'Edward Teller'},
  {text: '预测未来最好的方式，就是创造未来。', author: 'Alan Kay'},
  {text: '我们只能看清前方不远的路，但那里已经有很多值得去做的事。', author: 'Alan Turing'},
  {text: '现在是了解更多、畏惧更少的时候。', author: 'Marie Curie'},
  {text: '在某个地方，一定有不可思议的事情等着被发现。', author: 'Carl Sagan'},
  {text: '我不能创造的东西，我就无法真正理解。', author: 'Richard Feynman'},
  {text: '想象力比知识更重要。', author: 'Albert Einstein'},
  {text: '科学搜集知识的速度，超过了社会搜集智慧的速度。', author: 'Isaac Asimov'},
  {text: '足够先进的技术，看起来就像魔法。', author: 'Arthur C. Clarke'},
  {text: '未来已经到来，只是还没有均匀分布。', author: 'William Gibson'},
];

const QUOTE_INTERVAL = 10000;
const QUOTE_TRANSITION = 360;

function pickNextIndex(currentIndex) {
  if (QUOTES.length < 2) return 0;

  let nextIndex = currentIndex;
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * QUOTES.length);
  }
  return nextIndex;
}

const useQuoteLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default function RoboticsQuote() {
  const rootRef = useRef(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useQuoteLayoutEffect(() => {
    setQuoteIndex(Math.floor(Math.random() * QUOTES.length));

    const page = rootRef.current?.closest('.robotics-page');
    const article = rootRef.current?.closest('article');
    page?.classList.add('robotics-page--intro');
    article?.classList.add('robotics-article--intro');
    return () => {
      page?.classList.remove('robotics-page--intro');
      article?.classList.remove('robotics-article--intro');
    };
  }, []);

  useEffect(() => {
    if (QUOTES.length < 2) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let changeTimer;
    const cycleTimer = window.setInterval(() => {
      setIsTransitioning(true);
      changeTimer = window.setTimeout(() => {
        setQuoteIndex((currentIndex) => pickNextIndex(currentIndex));
        setIsTransitioning(false);
      }, QUOTE_TRANSITION);
    }, QUOTE_INTERVAL);

    return () => {
      window.clearInterval(cycleTimer);
      window.clearTimeout(changeTimer);
    };
  }, []);

  const quote = QUOTES[quoteIndex] || QUOTES[0];

  return (
    <div className="robotics-quote" ref={rootRef}>
      <blockquote data-transitioning={isTransitioning ? 'true' : 'false'}>
        <p>{quote.text}</p>
        <footer>- {quote.author}</footer>
      </blockquote>
    </div>
  );
}
