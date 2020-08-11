import PageLayout from "../components/PageLayout/PageLayout";
import PulsingText from "../components/PulsingText";
import ExternalLink from "../components/ExternalLink/ExternalLink";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <PageLayout pageTitle="Home" pageDescription="Arvin Wiyono's homepage">
      <h1 className={styles.homeHeading}>
        I build{" "}
        <PulsingText bolded color="#4f7da7">
          websites
        </PulsingText>
        ,
        <br />I make{" "}
        <PulsingText bolded color="#348677">
          guitar covers
        </PulsingText>
        ,
        <br />I sometimes{" "}
        <PulsingText bolded color="#96783c">
          take photos
        </PulsingText>
        .
      </h1>

      <div className="my-12 sm:flex items-end">
        <img
          className="rounded shadow-lg mb-4 w-1/3 sm:mr-6 sm:mb-0"
          src="/profile-picture.png"
          alt="Arvin profile picture"
        />
        <h2 className="leading-tight text-2xl">
          <span className="italic">Halo</span>,
          <br />I am <span className="font-semibold">Arvin Wiyono</span>
          <br />
          <span className="text-sm text-gray-700">
            ... or commonly known as <code>@awiy1</code>.
          </span>
        </h2>
      </div>

      <div className="my-12">
        <p>
          I am a web developer based in Melbourne, Australia. I graduated as the{" "}
          <ExternalLink url="https://www.monash.edu/it/about-us/news-and-events/latest/articles/2018/outstanding-fit-students-recognised">
            DUX of BSE from Monash University in 2018
          </ExternalLink>{" "}
          and am fairly new in the software engineering industry.
        </p>
        <p>
          A big passion of mine is creating beautiful software that solves
          real-world problems for real people.
        </p>
        <p>
          I am currently working as a software developer at{" "}
          <ExternalLink url="https://au.jora.com">jora.com</ExternalLink> - part
          of <ExternalLink url="https://seek.com.au">seek.com.au</ExternalLink>{" "}
          - helping people live more fulfilling working lives by serving them
          millions of jobs worldwide. I work with{" "}
          <span className="font-semibold">Ruby on Rails</span>,{" "}
          <span className="font-semibold">JavaScript</span>, and{" "}
          <span className="font-semibold">Sass</span>.
        </p>
        <p>
          Let me know if you have any cool projects that I can help with! 😁
        </p>
      </div>

      <div className={styles.mediaLinks}>
        <p>You can find me or say hi on:</p>
        <ExternalLink url="https://github.com/arvinwiyono">
          <span className="jam jam-github"></span>
          <span className={styles.linkDescription}>My GitHub profile</span>
        </ExternalLink>
        <ExternalLink url="https://www.linkedin.com/in/arvin-wiyono-80b5bba7/">
          <span className="jam jam-linkedin"></span>
          <span className={styles.linkDescription}>My LinkedIn profile</span>
        </ExternalLink>
        <ExternalLink url="https://www.youtube.com/watch?v=S6-mynCaNwk">
          <span className="jam jam-youtube"></span>
          <span className={styles.linkDescription}>
            My Youtube guitar cover
          </span>
        </ExternalLink>
      </div>
    </PageLayout>
  );
}
