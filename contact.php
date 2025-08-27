<?php
$status = '';
$message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message_content = htmlspecialchars($_POST['message']);
    
    // In a real application, you would handle email sending here
    // Example: mail('info@nexfernacademy.com', 'New Contact Form Submission', $message_content);
    
    // Simulate success
    $status = 'success';
    $message = 'Thank you for your message! We will get back to you shortly.';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us | Nexfern Academy</title>
    <link href="/src/index.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
    </style>
</head>
<body class="bg-gray-50 min-h-screen">
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Get in Touch
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about our programs? Ready to start your learning journey? We're here to help you every step of the way.
            </p>
        </div>
    </section>

    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-3 gap-12">
                <div class="lg:col-span-1 space-y-8">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                        <p class="text-gray-600 mb-8">
                            Reach out to us through any of these channels. Our team is ready to answer your questions and help you choose the right learning path.
                        </p>
                    </div>
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div class="bg-green-100 p-3 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-green-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2.18A19.02 19.02 0 0 1 8.64 3.52 20 20 0 0 1 2.2 2a2 2 0 0 1 2-2h3c.6 0 1.15.36 1.39.99l1.28 2.55c.24.64-.15 1.4-1.12 1.4h-1.38c-.35 0-.67.16-.9.41l-1.5 1.5c-2.8 2.8-2.8 7.4 0 10.2l1.5 1.5c.25.23.57.39.9.41h1.38c.97 0 1.36.76 1.12 1.4l-1.28 2.55c-.24.63.36 1.09.99 1.39h3c.6 0 1.15-.36 1.39-.99l1.28-2.55c.24-.64-.15-1.4-1.12-1.4h-1.38c-.35 0-.67-.16-.9-.41l-1.5-1.5c-2.8-2.8-2.8-7.4 0-10.2l1.5-1.5c.25-.23.57-.39.9-.41h1.38c.97 0 1.36-.76 1.12-1.4l-1.28-2.55c-.24-.63.36-1.09.99-1.39z"/></svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900 mb-1">Phone</h3>
                                <p class="text-gray-600">+1 (555) 123-4567</p>
                                <p class="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-4">
                            <div class="bg-blue-100 p-3 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-blue-600"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                                <p class="text-gray-600">info@nexfernacademy.com</p>
                                <p class="text-sm text-gray-500">Response within 24 hours</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-4">
                            <div class="bg-purple-100 p-3 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-purple-600"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900 mb-1">Address</h3>
                                <p class="text-gray-600">
                                    123 Learning Street<br />
                                    Tech District, TD 12345<br />
                                    United States
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-4">
                            <div class="bg-orange-100 p-3 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-orange-600"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900 mb-1">Office Hours</h3>
                                <p class="text-gray-600">
                                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                                    Saturday: 10:00 AM - 4:00 PM<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-2">
                    <div class="bg-white rounded-xl shadow-lg p-8">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                        <?php if ($status === 'success'): ?>
                            <div class="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                                <?php echo $message; ?>
                            </div>
                        <?php endif; ?>

                        <form action="contact.php" method="POST" class="space-y-6">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                        placeholder="Your full name"
                                    />
                                </div>
                                
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="cohort-inquiry">Offline Cohort Inquiry</option>
                                    <option value="online-course">Online Course Question</option>
                                    <option value="admission">Admission Process</option>
                                    <option value="technical-support">Technical Support</option>
                                    <option value="partnership">Partnership Opportunities</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="6"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical"
                                    placeholder="Tell us about your goals, questions, or how we can help you..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                class="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center group"
                            >
                                Send Message
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M15 15l7-7"/></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>