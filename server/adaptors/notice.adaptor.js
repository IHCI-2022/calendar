import { noticeIHCI } from './IHCI.adaptor';

export function notice(userID, scheduleObj, type, callback) {
  noticeIHCI(userID, scheduleObj, type, callback);
}
