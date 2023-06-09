import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Box, Divider } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';

type Revise = {
  statuscode: number;
  body: string;
};

function App() {
  let [sentence, setSentence] = useState('');
  let [reviseSentence, setReviseSentence] = useState<Revise>();
  let [isSentenceLoading, setIsSentenceLoading] = useState<boolean>();

  const onChangeSentence = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = e.target.value;
    setSentence(inputValue);
  };

  const onExecSentence = async () => {
    setIsSentenceLoading(true);
    await postSentence();
    setIsSentenceLoading(false);
  };

  async function postSentence(): Promise<void> {
    const url =
      'https://8ilslxkqi8.execute-api.ap-northeast-1.amazonaws.com/dev/conversation';

    await axios
      .post<Revise>(url, {
        text: sentence,
      })
      .then((response: AxiosResponse<Revise>) => {
        setReviseSentence(response.data);
      });
  }

  return (
    <>
      <Box bg="brand.10" w="100%" p={4} m={4} color="white">
        文章校正ツール
      </Box>
      <Box ml={4}>
        <Textarea
          value={sentence}
          onChange={onChangeSentence}
          placeholder="校正してほしい文章をここに入力してください"
        />
      </Box>
      <Box ml={8} display="flex" color="gray.500">
        入力例：申請書の提出の期限の変更の依頼をします。
      </Box>
      <Box m={4}>
        <Button
          isLoading={isSentenceLoading}
          bg="brand.10"
          _hover={{ bg: 'brand.10' }}
          onClick={onExecSentence}
        >
          校正する
        </Button>
      </Box>
      <Box bg="brand.50" m={4} p={8} w="100%">
        <Box display="flex" alignItems="left" color="brand.10">
          校正結果
        </Box>
        <Divider borderColor="brand.10" />
        <Box m={4}>{reviseSentence?.body}</Box>
      </Box>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
