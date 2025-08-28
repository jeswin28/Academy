<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message_content = trim($_POST["message"]);

    // Set your email address here
    $recipient = "info@nexfernacademy.com";

    // Email subject
    $email_subject = "New Contact Form Submission: " . $subject;

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Subject: $subject\n";
    $email_content .= "Message:\n$message_content\n";

    // Email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        // Redirect to a success page
        header("Location: /payment/success?from=contact");
        exit;
    } else {
        // Redirect to a failure page
        header("Location: /payment/cancel?from=contact");
        exit;
    }
} else {
    // Not a POST request, redirect to the contact page
    header("Location: /contact");
    exit;
}
?>