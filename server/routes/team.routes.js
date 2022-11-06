import * as TeamController from '../controllers/team.controller';
import { Router } from 'express';
import * as RemindController from '../controllers/remind.controller';
import * as NoticeController from '../controllers/notice.controller';

const router = new Router();

router.route('/teammates').post(TeamController.getTeammate);
router.route('/remind').post(RemindController.sendRemind);
router.route('/notice').post(NoticeController.sendNotice);

export default router;
