import { useSelector } from 'react-redux';
import { Card } from './Card';
import { IMessageEvent, w3cwebsocket as w3socket } from 'websocket';
import { useEffect, useState } from 'react';

const url = 'wss://ws.satangcorp.com/ws/!miniTicker@arr@3000ms';

const socket = new w3socket(url);

enum MessageKeyMap {
  EventType = 'e',
  Symbol = 's',
  Volume = 'q',
  LastPrice = 'c',
}

interface IEvent {
  e: 'string';
  E: 'number';
  s: 'string';
  c: 'string';
  o: 'string';
  h: 'string';
  l: 'string';
  v: 'string';
  q: 'string';
}

const CardSocket = (): JSX.Element => {
  const pair: string = useSelector((state: { pair: string }) => state.pair);
  const [ticker, setTicker] = useState();

  useEffect(() => {
    socket.onmessage = (messages: IMessageEvent) => {
      if (pair) {
        const datas = JSON.parse(messages.data as string);
        const filtered = datas.find(
          (message: IEvent) =>
            message[MessageKeyMap.Symbol] == pair.toLowerCase()
        );

        if (filtered) {
          setTicker(filtered);
        }
      }
    };
  }, [socket]);

  return (
    <>
      <div>{pair}</div>
      <Card
        ticker={
          !ticker
            ? undefined
            : {
                symbol: ticker[MessageKeyMap.Symbol],
                volume: ticker[MessageKeyMap.Volume],
                lastPrice: ticker[MessageKeyMap.LastPrice],
              }
        }
      />
    </>
  );
};

export { CardSocket };
