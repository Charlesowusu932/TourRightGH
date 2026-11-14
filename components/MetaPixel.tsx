/**
 * Meta Pixel base code, rendered verbatim inside <head> as Meta's setup asks
 * ("between the <head> and </head> tags ... on every page").
 * Buy-button InitiateCheckout events are sent from components/Analytics.tsx.
 */
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1437236261447838";

const baseCode = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');
`;

const noscriptImg = `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1"
/>`;

export function MetaPixel() {
  if (!PIXEL_ID) return null;
  return (
    <>
      {/* Meta Pixel Code */}
      <script id="meta-pixel" dangerouslySetInnerHTML={{ __html: baseCode }} />
      <noscript dangerouslySetInnerHTML={{ __html: noscriptImg }} />
      {/* End Meta Pixel Code */}
    </>
  );
}
