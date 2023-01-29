import React, { useEffect, useState } from "react";

import { QuestionCircleOutlined } from "@ant-design/icons";
import "./styles.scss";

type SvgInlineProps = {
  url?: string;
};

const request = async (url: string) => {
  return fetch(url, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
};

function SvgInline({ url }: SvgInlineProps) {
  const [svg, setSvg] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (url) {
      request(url)
        .then((response) => response.text())
        .then((json) => {
          setSvg(json);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [url]);

  return error ? (
    <div className="lib-svg-inline">
      <QuestionCircleOutlined />
    </div>
  ) : (
    <div className="lib-svg-inline" dangerouslySetInnerHTML={{ __html: svg }} />
  );
}

export default SvgInline;
