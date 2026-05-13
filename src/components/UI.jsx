import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import styles from './styles.module.css'

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.contact}>
          <p>INSTAGRAM</p>
          <p>LINKEDIN</p>
          <p>ABOUT</p>
        </div>
        <a className={styles.logoLink}>
          <img className={styles.logo} src="/images/furdak2.png" />
        </a>
        <div className={styles.navWrapper}>
          <div className={styles.navScroll}>
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`${styles.pageButton} ${index === page ? styles.pageButtonActive : styles.pageButtonInactive}`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`${styles.pageButton} ${page === pages.length ? styles.pageButtonActive : styles.pageButtonInactive}`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className={styles.scrollTextContainer}>
        <div className={styles.scrollTextInner}>
          {/* slanted text section */}
        </div>
      </div>
    </>
  );
};