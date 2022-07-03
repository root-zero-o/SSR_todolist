import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/elements.css";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"

const App = ({ Component, pageProps }: AppProps) => {

 const [queryClient] = React.useState(() => new QueryClient())
 

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
};

// Hydrate를 이용해서 쿼리 캐싱과 수화 설정을 해준다.
// 이렇게 해야 구성 요소 수명 주기 당 QueryClient를 한 번만 생성한다.
// 데이터가 서로 다른 사용자와 요청간 공유되지 않는다.

export default App;