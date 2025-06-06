SELECT
  jobs.title as job_title,
  STRING_AGG(employers.name, ', ') AS options
FROM
  jobs
CROSS JOIN
  employers
GROUP BY
  jobs.title;