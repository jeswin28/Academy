<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate inputs
    $firstName = strip_tags(trim($_POST["firstName"]));
    $lastName = strip_tags(trim($_POST["lastName"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $address = strip_tags(trim($_POST["address"]));
    $city = strip_tags(trim($_POST["city"]));
    $state = strip_tags(trim($_POST["state"]));
    $zip = strip_tags(trim($_POST["zip"]));
    $education = strip_tags(trim($_POST["education"]));
    $experience = strip_tags(trim($_POST["experience"]));

    // Set your email address
    $recipient = "admissions@nexfernacademy.com";
    $subject = "New Cohort Application: " . $firstName . " " . $lastName;

    // Email content
    $email_content = "A new application has been submitted for the MERN Stack Bootcamp.\n\n";
    $email_content .= "--- Personal Information ---\n";
    $email_content .= "First Name: $firstName\n";
    $email_content .= "Last Name: $lastName\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "--- Address ---\n";
    $email_content .= "Address: $address\n";
    $email_content .= "City: $city\n";
    $email_content .= "State: $state\n";
    $email_content .= "ZIP Code: $zip\n\n";
    $email_content .= "--- Qualifications ---\n";
    $email_content .= "Highest Level of Education:\n$education\n\n";
    $email_content .= "Relevant Experience:\n$experience\n";

    // Email headers
    $email_headers = "From: $firstName $lastName <$email>";

    // Send the email and redirect
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        header("Location: /payment/success?from=application");
    } else {
        header("Location: /payment/cancel?from=application");
    }
    exit;
} else {
    // Not a POST request
    header("Location: /application");
    exit;
}
?>