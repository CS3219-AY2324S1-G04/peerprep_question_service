import app from './app';
import { PORT } from './constants/question-service-api.constants';

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
