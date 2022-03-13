import type { Principal } from '@dfinity/principal';
export interface Message { 'text' : string, 'time' : bigint }
export interface _SERVICE {
  'follow' : (arg_0: Principal) => Promise<undefined>,
  'follows' : () => Promise<Array<Principal>>,
  'post' : (arg_0: string) => Promise<undefined>,
  'posts' : () => Promise<Array<Message>>,
  'timeline' : () => Promise<Array<Message>>,
}
