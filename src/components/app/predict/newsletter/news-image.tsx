import { css } from "@emotion/react";

type imageProps = {
  src?: string;
  date?: string;
};

export default function NewImage({ src, date }: imageProps) {
  const dateSet = date?.split(" ") ?? [];
  /** ['Sun,', '10', 'Mar', '2024', '09:02:00', '+0900'] */
  const [day, month, year] = dateSet.slice(1, 4).map((item) => item ?? "--");

  let parsedSrc = src;
  if (src !== undefined) {
    const pathname = new URL(src).pathname;
    if (pathname.split("//").length > 1) {
      parsedSrc = `https://${pathname.split("//")[1]}`;
    } else {
      parsedSrc = src;
    }
  }

  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        height: 141px;
        background-color: gray;
        border: none;
        border-radius: 8px;
        background-image: url(${parsedSrc});
        background-size: cover;
        background-repeat: no-repeat;
      `}
    >
      <div
        css={css`
          position: absolute;
          background-color: #f29a17;
          line-height: 18px;
          font-size: 12px;
          color: white;
          padding: 4px 8px 4px 8px;
          border-top-left-radius: 4px;
          border-bottom-right-radius: 4px;
        `}
      >
        {`${month} ${day}, ${year}`}
      </div>
    </div>
  );
}
