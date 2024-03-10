import { css } from "@emotion/react";

type imageProps = {
  src?: string;
  date?: string;
};

export default function NewImage({ src, date }: imageProps) {
  const dateSet = date?.split(" ");
  let day = "--",
    month = "--",
    year = "--";

  if (dateSet && dateSet.length > 1) {
    // ['Sun,', '10', 'Mar', '2024', '19:03:00', '+0900']
    day = dateSet[1];
    month = dateSet[2];
    year = dateSet[3];
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
        background-image: url(${src});
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
