import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Introducing Simwood</>,
    imageUrl: 'img/1.svg',
    description: (
      <>
        We are a dynamic wholesale telecoms carrier specialising in innovation-driven wholesale VoIP telephony. Our smart, feature-rich hosted voice platform enables our partners to deliver an industry-leading service to their customers.
        <br /><br />
        With a wholly owned and operated network, a team of highly specialised engineers, ground-breaking fraud protection and an uncompromisingly honest approach, we are a rare find in the telecom industry.
      </>
    ),
  },
  {
    title: <>A rock solid network</>,
    imageUrl: 'img/2.svg',
    description: (
      <>
        Our highly advanced and ever-evolving telephony network has been built from the ground up by our team of exceptional engineers. By controlling every element of our infrastructure, we can ensure your calls get the priority they deserve. There are no delays from supply chains, no blaming ‘service providers’; we own our network and take pride in operating it so your service won’t skip a beat. Underpinned by ground-breaking technology, our network is constantly being updated and advanced so it never ceases to add value to our customers.
      </>
    ),
  },
  {
    title: <>Built by real engineers</>,
    imageUrl: 'img/3.svg',
    description: (
      <>
        For over 20 years we have been pioneers in the industry, innovating the latest technological developments and shaping future technologies. Our position at the heart of the communities we belong to, and our thought-leadership, mean we punch dramatically above our weight in international circles. Our customers benefit from the very best that technology has to offer because we remain five steps ahead of the herd. Great pains are taken to own and operate all equipment and network hardware, where it adds value to do so. This means our engineers have access to every element of your service, without having to rely on a less experienced third party.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
