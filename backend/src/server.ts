import fastify from 'fastify';
import cors from '@fastify/cors';
import {validatorCompiler, serializerCompiler} from 'fastify-type-provider-zod';
import { createTrip } from './routers/create-trip';
import { confirmTrip } from './routers/confirm-trip';
import { confirmParticipants } from './routers/confirm-participant';
import { createActivity } from './routers/create-activity';
import { getActivities } from './routers/get-activities';
import { createLink } from './routers/create-link';
import { getLinks } from './routers/get-links';
import { getParticipants } from './routers/get-participants';
import { createInvite } from './routers/create-invite';
import { updateTrip } from './routers/update-trip';
import { getTripDetails } from './routers/get-trip-details';
import { getParticipant } from './routers/get-participant';
import { errorHandler } from './error-handler';
import { env } from './env';

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(cors, {
    origin: '*',
})

app.setErrorHandler(errorHandler);

app.register(createTrip);
app.register(confirmTrip);
app.register(confirmParticipants);
app.register(createActivity);
app.register(getActivities);
app.register(createLink);
app.register(getLinks);
app.register(getParticipants);
app.register(createInvite);
app.register(updateTrip);
app.register(getTripDetails);
app.register(getParticipant);

app.listen({port: env.PORT}).then(() => {
    console.log('Server Running on Port:', env.PORT);
});


