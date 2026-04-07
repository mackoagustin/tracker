# Tracker deployment

This project can be deployed automatically to AWS S3 and CloudFront through GitHub Actions.

## GitHub configuration

### Required secrets

- `AWS_DEPLOY_ROLE_ARN`: IAM role ARN that GitHub Actions assumes through OpenID Connect (OIDC).
- `AWS_REGION`: AWS region where the S3 bucket exists.
- `S3_BUCKET_NAME`: Target bucket for the static site.
- `CLOUDFRONT_DISTRIBUTION_ID`: CloudFront distribution to invalidate after upload.

## AWS setup

Create an IAM role that trusts GitHub's OIDC provider and grant it permissions for:

- `s3:ListBucket` on the deployment bucket.
- `s3:PutObject`
- `s3:DeleteObject`
- `s3:GetObject`
- `cloudfront:CreateInvalidation` on the target distribution.

Recommended trust policy conditions should limit access to this repository and branch.

## Workflow behavior

The workflow file is located at `.github/workflows/deploy.yml`.

It will:

1. Run on pushes to `main`.
2. Assume the AWS role using GitHub OIDC.
3. Sync the repository contents to the configured S3 bucket.
4. Invalidate CloudFront with the path `/*`.

## Important note

This setup uses OIDC authentication (no long-lived AWS keys required). All configuration values are stored as GitHub Secrets.
