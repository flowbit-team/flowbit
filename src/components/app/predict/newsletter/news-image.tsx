import { css } from "@emotion/react";
import { DESIGN_SYSTEM_COLOR } from "@/style/variable.ts";

type imageProps = {
  src?: string;
  date?: string;
};

export default function NewImage({ src, date }: imageProps) {
  const dateSet = date?.split(" ") ?? [];
  /** ['Sun,', '10', 'Mar', '2024', '09:02:00', '+0900'] */
  const [day, month, year] = dateSet.slice(1, 4).map((item) => item ?? "--");

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
        box-shadow: inset 0 0 0 0.1rem ${DESIGN_SYSTEM_COLOR.GRAY_200};
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
