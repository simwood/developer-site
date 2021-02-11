import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Nimvelo() {
  return (
    <Layout title="Nimvelo">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
          <svg
            style={{
              width: '20em',
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 273.663 56.439"
          >
            <path fill="#314755" d="M0 8.863a5.68 5.68 0 0 1 5.725-5.725h1.189c2.75 0 4.386 1.338 5.947 3.346l22.08 28.993V8.64a5.65 5.65 0 1 1 11.299 0v41.407a5.68 5.68 0 0 1-5.725 5.725h-.371c-2.75 0-4.386-1.338-5.947-3.345L11.3 22.393V50.27a5.65 5.65 0 1 1-11.3 0z"></path>
            <path fill="#314755" d="M50.154 6.32A6.043 6.043 0 0 1 56.52 0a6.044 6.044 0 0 1 6.364 6.32v.178a6.364 6.364 0 1 1-12.729 0zm.969 14.511a5.65 5.65 0 1 1 11.3 0V50.27a5.65 5.65 0 1 1-11.3 0z"></path>
            <path fill="#314755" d="M66.527 20.831a5.65 5.65 0 1 1 11.3 0v.446c2.602-3.345 6.021-6.393 11.745-6.393 5.204 0 9.145 2.305 11.226 6.32 3.494-4.09 7.656-6.32 13.083-6.32 8.401 0 13.456 5.055 13.456 14.645V50.27a5.65 5.65 0 1 1-11.299 0V33.246c0-5.352-2.38-8.102-6.617-8.102s-6.84 2.75-6.84 8.102V50.27a5.65 5.65 0 1 1-11.3 0V33.246c0-5.352-2.378-8.102-6.615-8.102s-6.84 2.75-6.84 8.102V50.27a5.65 5.65 0 1 1-11.3 0z"></path>
            <path fill="#314755" d="M148.98 56.292h-.595c-3.049 0-5.13-1.933-6.394-4.906L129.797 23.21a7.511 7.511 0 0 1-.595-2.752 5.549 5.549 0 0 1 5.504-5.277 5.454 5.454 0 0 1 5.501 4.014l8.55 23.12 8.697-23.269a5.475 5.475 0 0 1 5.278-3.865 5.346 5.346 0 0 1 5.427 5.352 7.947 7.947 0 0 1-.594 2.677l-12.193 28.175c-1.263 2.899-3.345 4.906-6.392 4.906"></path>
            <path fill="#314755" d="M195.133 32.428c-.669-5.054-3.642-8.474-8.4-8.474-4.683 0-7.732 3.345-8.624 8.474zm-7.285 23.938c-11.97 0-20.815-8.4-20.815-20.592v-.15c0-11.373 8.103-20.74 19.7-20.74 13.306 0 19.18 10.929 19.18 19.18a5.155 5.155 0 0 1-5.279 5.427h-22.376c1.115 5.13 4.684 7.806 9.738 7.806a13.045 13.045 0 0 0 8.03-2.676 4.217 4.217 0 0 1 2.75-.893 4.32 4.32 0 0 1 4.386 4.46 4.432 4.432 0 0 1-1.487 3.346 20.642 20.642 0 0 1-13.827 4.832"></path>
            <path fill="#314755" d="M207.644 6.41a5.65 5.65 0 1 1 11.3 0v43.86a5.65 5.65 0 1 1-11.3 0z"></path>
            <path fill="#314755" d="M254.005 46.233l-4.461-1.3a11.286 11.286 0 1 1 3.12-3.06zm-10.768-31.421c-12.458 0-21.709 9.325-21.709 20.814v.15c0 11.487 9.176 20.663 21.56 20.663 12.458 0 21.708-9.325 21.708-20.813v-.15c0-11.488-9.174-20.664-21.559-20.664"></path>
            <path fill="#314755" d="M264.216 50.43a4.724 4.724 0 0 1 9.447 0v.133a4.724 4.724 0 1 1-9.447 0z"></path>
            <path fill="#26a0da" d="M249.906 35.542a6.358 6.358 0 1 1-6.358-6.358 6.358 6.358 0 0 1 6.358 6.358"></path>
          </svg>
          <p
            style={{
              paddingTop: '2em',
              maxWidth: '30em',
              textAlign: 'center',
            }}
          >
            We just wanted to let you know that our developer website has moved and is now under <a href="https://developer.simwood.com">developer.simwood.com</a>, this is where you'll be able to find the most up to date API documentation.
          </p>
          <p>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/direct/introduction')}>
              View Documentation
            </Link>
          </p>
      </div>
    </Layout>
  );
}

export default Nimvelo;