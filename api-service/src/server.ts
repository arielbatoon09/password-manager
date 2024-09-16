import app from './app';
import { errorHandler, notFound } from './middleware/errorMiddleware';

// Error Middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
