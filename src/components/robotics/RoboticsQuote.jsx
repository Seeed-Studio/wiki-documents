import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useLocation} from '@docusaurus/router';

const QUOTES = {
  en: [
    {text: 'The science of today is the technology of tomorrow.', author: 'Edward Teller'},
    {text: 'The best way to predict the future is to invent it.', author: 'Alan Kay'},
    {
      text: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.',
      author: 'Alan Turing',
    },
    {text: 'Now is the time to understand more, so that we may fear less.', author: 'Marie Curie'},
    {text: 'Somewhere, something incredible is waiting to be known.', author: 'Carl Sagan'},
    {text: 'What I cannot create, I do not understand.', author: 'Richard Feynman'},
    {text: 'Imagination is more important than knowledge.', author: 'Albert Einstein'},
    {
      text: 'Science gathers knowledge faster than society gathers wisdom.',
      author: 'Isaac Asimov',
    },
    {
      text: 'Any sufficiently advanced technology is indistinguishable from magic.',
      author: 'Arthur C. Clarke',
    },
    {text: 'The future is already here. It is just not evenly distributed yet.', author: 'William Gibson'},
  ],
  cn: [
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
  ],
  ja: [
    {text: '今日の科学は明日の技術である。', author: 'Edward Teller'},
    {text: '未来を予測する最良の方法は、それを発明することだ。', author: 'Alan Kay'},
    {
      text: '私たちには少し先しか見えないが、そこにはなすべきことがたくさんある。',
      author: 'Alan Turing',
    },
    {text: '今こそ、恐れを減らすために、より深く理解するときだ。', author: 'Marie Curie'},
    {text: 'どこかで、何か素晴らしいものが発見されるのを待っている。', author: 'Carl Sagan'},
    {text: '私が作れないものは、理解していない。', author: 'Richard Feynman'},
    {text: '想像力は知識よりも重要である。', author: 'Albert Einstein'},
    {
      text: '科学が知識を集める速度は、社会が知恵を集める速度より速い。',
      author: 'Isaac Asimov',
    },
    {
      text: '十分に発達した科学技術は、魔法と見分けがつかない。',
      author: 'Arthur C. Clarke',
    },
    {text: '未来はすでにここにある。ただ均等に行き渡っていないだけだ。', author: 'William Gibson'},
  ],
  es: [
    {text: 'La ciencia de hoy es la tecnología de mañana.', author: 'Edward Teller'},
    {text: 'La mejor manera de predecir el futuro es inventarlo.', author: 'Alan Kay'},
    {
      text: 'Solo podemos ver una corta distancia hacia adelante, pero allí hay mucho que debemos hacer.',
      author: 'Alan Turing',
    },
    {text: 'Ahora es el momento de comprender más, para temer menos.', author: 'Marie Curie'},
    {text: 'En algún lugar, algo increíble espera ser descubierto.', author: 'Carl Sagan'},
    {text: 'Lo que no puedo crear, no lo entiendo.', author: 'Richard Feynman'},
    {text: 'La imaginación es más importante que el conocimiento.', author: 'Albert Einstein'},
    {
      text: 'La ciencia reúne conocimiento más rápido de lo que la sociedad reúne sabiduría.',
      author: 'Isaac Asimov',
    },
    {
      text: 'Cualquier tecnología suficientemente avanzada es indistinguible de la magia.',
      author: 'Arthur C. Clarke',
    },
    {
      text: 'El futuro ya está aquí; simplemente no está distribuido de manera uniforme.',
      author: 'William Gibson',
    },
  ],
  'pt-br': [
    {text: 'A ciência de hoje é a tecnologia de amanhã.', author: 'Edward Teller'},
    {text: 'A melhor maneira de prever o futuro é inventá-lo.', author: 'Alan Kay'},
    {
      text: 'Só conseguimos enxergar uma pequena distância à frente, mas já vemos muito que precisa ser feito.',
      author: 'Alan Turing',
    },
    {text: 'Agora é a hora de compreender mais, para que possamos temer menos.', author: 'Marie Curie'},
    {
      text: 'Em algum lugar, algo incrível está esperando para ser descoberto.',
      author: 'Carl Sagan',
    },
    {text: 'Aquilo que eu não consigo criar, eu não entendo.', author: 'Richard Feynman'},
    {text: 'A imaginação é mais importante que o conhecimento.', author: 'Albert Einstein'},
    {
      text: 'A ciência acumula conhecimento mais rápido do que a sociedade acumula sabedoria.',
      author: 'Isaac Asimov',
    },
    {
      text: 'Qualquer tecnologia suficientemente avançada é indistinguível da magia.',
      author: 'Arthur C. Clarke',
    },
    {
      text: 'O futuro já chegou; apenas ainda não está distribuído de forma uniforme.',
      author: 'William Gibson',
    },
  ],
};

function getLocaleFromPath(pathname) {
  if (pathname === '/cn' || pathname.startsWith('/cn/')) return 'cn';
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  if (pathname === '/pt-br' || pathname.startsWith('/pt-br/')) return 'pt-br';
  return 'en';
}

const QUOTE_INTERVAL = 10000;
const QUOTE_TRANSITION = 360;

function pickNextIndex(currentIndex, count) {
  if (count < 2) return 0;

  let nextIndex = currentIndex;
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * count);
  }
  return nextIndex;
}

const useQuoteLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default function RoboticsQuote() {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const quotes = QUOTES[locale] || QUOTES.en;
  const rootRef = useRef(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useQuoteLayoutEffect(() => {
    setQuoteIndex(Math.floor(Math.random() * quotes.length));

    const page = rootRef.current?.closest('.robotics-page');
    const article = rootRef.current?.closest('article');
    page?.classList.add('robotics-page--intro');
    article?.classList.add('robotics-article--intro');
    return () => {
      page?.classList.remove('robotics-page--intro');
      article?.classList.remove('robotics-article--intro');
    };
  }, [quotes]);

  useEffect(() => {
    if (quotes.length < 2) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let changeTimer;
    const cycleTimer = window.setInterval(() => {
      setIsTransitioning(true);
      changeTimer = window.setTimeout(() => {
        setQuoteIndex((currentIndex) => pickNextIndex(currentIndex, quotes.length));
        setIsTransitioning(false);
      }, QUOTE_TRANSITION);
    }, QUOTE_INTERVAL);

    return () => {
      window.clearInterval(cycleTimer);
      window.clearTimeout(changeTimer);
    };
  }, [quotes]);

  const quote = quotes[quoteIndex] || quotes[0];

  return (
    <div className="robotics-quote" ref={rootRef}>
      <blockquote data-transitioning={isTransitioning ? 'true' : 'false'}>
        <p>{quote.text}</p>
        <footer>- {quote.author}</footer>
      </blockquote>
    </div>
  );
}