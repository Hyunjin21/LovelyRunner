"use client";
import clsx from "clsx";
import styles from "./index.module.css";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrase =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";

export default function Section02Page() {
  let sec2TxtRef = useRef<HTMLSpanElement[]>([]);
  const section02Ref = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(sec2TxtRef.current, {
      scrollTrigger: {
        trigger: section02Ref.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1.5}`,
        markers: true,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase: string) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el: HTMLSpanElement | null) => {
            if (el) sec2TxtRef.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <section
      ref={section02Ref}
      className={clsx(
        styles.sec2,
        "flex h-[100vh] items-end justify-center mb-[100vh] text-[rgba(211,211,211)]"
      )}
    >
      <div
        ref={body}
        className={clsx(styles.sec2Txt, "w-full flex flex-wrap en400 text-4xl")}
      >
        {splitWords(phrase)}
      </div>
    </section>
  );
}
