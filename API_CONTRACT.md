# API Contract - NeoMotion Backend

This document defines the API contract between the frontend and backend teams for the NeoMotion application.

## Base URL

- **Development**: `http://localhost:3001`
- **Production**: `TBD` (to be provided by backend team)

## Endpoints

### 1. Health Check

**Endpoint**: `GET /api/health`

**Description**: Check if the API server is running.

**Response**:
```json
{
  "status": "ok",
  "timestamp": "2025-12-25T18:24:46.000Z"
}
```

**Status Codes**:
- `200 OK`: Server is running

---

### 2. Contact Form Submission

**Endpoint**: `POST /api/contact`

**Description**: Submit contact form data from the frontend.

**Request Headers**:
```
Content-Type: application/json
```

**Request Body**:
```json
{
  "name": "string (required, max 100 characters)",
  "email": "string (required, valid email format)",
  "phone": "string (required, 10-15 digits)",
  "message": "string (required, max 1000 characters)"
}
```

**Example Request**:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "9876543210",
  "message": "I would like to know more about your medical technology solutions."
}
```

**Success Response**:
```json
{
  "success": true,
  "message": "Thank you for contacting us! We'll get back to you soon.",
  "submissionId": "unique-id-12345"
}
```

**Status Codes**:
- `200 OK`: Form submitted successfully
- `400 Bad Request`: Validation error
- `500 Internal Server Error`: Server error

**Error Response**:
```json
{
  "success": false,
  "message": "Error message describing what went wrong",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

**Validation Rules**:
- `name`: Required, non-empty string, max 100 characters
- `email`: Required, valid email format (RFC 5322)
- `phone`: Required, 10-15 digits (can include spaces, hyphens, parentheses)
- `message`: Required, non-empty string, max 1000 characters

---

## CORS Configuration

**Required CORS Headers**:
```
Access-Control-Allow-Origin: http://localhost:5173 (development)
Access-Control-Allow-Origin: https://neomotion.vercel.app (production - TBD)
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
Access-Control-Max-Age: 86400
```

**Important**: 
- Support preflight OPTIONS requests
- Allow credentials if needed: `Access-Control-Allow-Credentials: true`

---

## Rate Limiting (Optional)

**Recommendation**: Implement rate limiting to prevent abuse
- Limit: 5 requests per minute per IP address for `/api/contact`
- Return `429 Too Many Requests` when limit exceeded

**Rate Limit Response**:
```json
{
  "success": false,
  "message": "Too many requests. Please try again later.",
  "retryAfter": 60
}
```

---

## Email Notification (Backend Implementation)

When a contact form is submitted, the backend should:
1. Validate the request data
2. Store the submission in a database (optional)
3. Send an email notification to the admin/team
4. Send a confirmation email to the user (optional)

**Email Details** (to be configured by backend team):
- Admin email: `TBD`
- Email service: `TBD` (e.g., SendGrid, AWS SES, Nodemailer with SMTP)

---

## Security Considerations

1. **Input Sanitization**: Sanitize all input fields to prevent XSS attacks
2. **SQL Injection**: Use parameterized queries if storing in database
3. **Rate Limiting**: Implement to prevent spam
4. **HTTPS**: Use HTTPS in production
5. **Environment Variables**: Store sensitive data (API keys, email credentials) in environment variables

---

## Testing

**Backend Developer**: Please provide the following for testing:
- Development server URL
- Any API keys or authentication tokens needed
- Test email address to verify email delivery

**Frontend Testing**: We will test with:
- Valid form submissions
- Invalid data (missing fields, invalid email, etc.)
- Network errors (timeout, server down)
- CORS configuration

---

## Questions for Backend Team

1. What database will be used to store contact form submissions?
2. What email service will be used?
3. Will there be any authentication/authorization required?
4. What is the expected response time for the API?
5. Will there be any webhook or callback for form submission status?

---

## Contact

**Frontend Team**: [Your Name/Email]
**Backend Team**: [Backend Developer Name/Email]

---

## Version History

- **v1.0** (2025-12-25): Initial API contract
