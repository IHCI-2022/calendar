import glossary from '../util/glossary';
import config from '../config';
import { notice } from '../adaptors/notice.adaptor';
import { getSchedule } from '../util/util';


export function sendNotice(req, res) {
  const language = config.language;
  if (!req.body.userID) {
    res.status(400).send({
      status: 400,
      msg: glossary.badRequest[language],
    });
    return;
  }

  getSchedule(req.body.scheduleId).then((schedule) => {
    notice(req.body.userID, schedule, req.body.type, (err) => {
      if (err) {
        res.status(500).send({
          status: 500,
          msg: glossary.internalError[language],
        });
      } else {
        res.json({
          status: 200,
          msg: glossary.success[language],
        }).send();
      }
    });
  });
}
