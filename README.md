 1. Queue-Based Email Sending

Adds email jobs asynchronously

Handles thousands of requests without blocking the server

 2. Redis-Powered Job Management

Fast read/write operations

Auto retry, backoff, priority & rate limits

 3. Job Cancellation / Pause / RemoveAll

Cancel a single job

Cancel all jobs

Pause or resume queue

Clean completed and failed jobs

 4. SMTP Email Sending (Nodemailer)

Gmail / SMTP providers supported

Error handling for Google send-limit (550-5.4.5)

 5. Advanced Worker System

Concurrency (parallel workers)

Failover detection

Retry with exponential backoff

 6. Logging (Winston)

Error logs

Info logs

Queue event logs (completed, failed, stalled jobs)
