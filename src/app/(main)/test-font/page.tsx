import Head from 'next/head';

export default function TestFont() {
  return (
    <div>
      <Head>
        <style>
          {`
            @font-face {
              font-family: 'Waguri';
              src: url('/fonts/WAGURI.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            .custom-waguri-font {
              font-family: 'Waguri', sans-serif;
            }
          `}
        </style>
      </Head>
      <div className="custom-waguri-font">
        This is a test page for Waguri font.
      </div>
    </div>
  );
}
