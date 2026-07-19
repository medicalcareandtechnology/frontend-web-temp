import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export const PrivacyPolicy = () => {
    return (
        <div className="bg-[#FAF9F6] min-h-screen text-neutral-800 selection:bg-neutral-800 selection:text-[#FAF9F6] [&_h2]:text-[#3B302C] [&_h3]:text-[#3B302C] [&_a]:text-[#B58B80] [&_a]:hover:text-[#8b6e60] [&_div.h-px]:bg-none [&_div.h-px]:bg-neutral-200/60">
            <SEO
                title="Privacy Policy"
                description="Privacy Policy for EaseBand and Easeflow by Medical Care & Technology."
                url="/privacy"
            />

            <div className="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-0 w-full h-[600px] bg-[#B58B80]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-light tracking-[0.1em] font-serif mb-4 text-[#3B302C]">
                            Privacy Policy
                        </h1>
                        <p className="text-sm md:text-base text-[#B58B80] font-light tracking-[0.2em] uppercase">
                            EaseBand and Easeflow
                        </p>
                        <p className="text-xs text-neutral-500 tracking-[0.1em] uppercase mt-2">
                            A Product of Medical Care & Technology
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-stone max-w-none space-y-10 text-neutral-600 font-light leading-relaxed text-sm md:text-base"
                    >
                        <section className="space-y-4">
                            <p>
                                Medical Care and Technology is the company behind EaseBand and Easeflow and we are committed to protecting your information.
                            </p>
                            <p>
                                We want to make sure that you know how we collect and use your information when you use EaseBand and Easeflow.
                            </p>
                            <p>
                                Our address is RZ-29A, KH. No.-137, GALI No.-1, DURGA PARK, Palam Village, New Delhi - 110045. If you have any questions about this policy you can email us at <a href="mailto:support@medcaretech.in" className="text-blue-400 hover:underline">support@medcaretech.in</a>.
                            </p>
                            <p>
                                This policy is part of our terms and conditions. When you use EaseBand and Easeflow you are agreeing to this policy.
                            </p>
                            <p>
                                We follow the rules of the Information Technology Act, 2000 the Information Technology Rules and the Digital Personal Data Protection Act 2023.
                            </p>
                        </section>

                        {/* Section Divider */}
                        <div className="h-px bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-transparent" />

                        {/* What You Should Know at a Glance */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                What You Should Know at a Glance
                            </h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>We collect information so EaseBand and Easeflow can work properly.</li>
                                <li>We collect information to improve EaseBand and Easeflow and to communicate with you about your account and orders.</li>
                                <li>Some of the information we collect is sensitive such as wellness and body temperature information from EaseBand.</li>
                                <li>We take care with this sensitive information from EaseBand and Easeflow.</li>
                                <li>Some rules apply to minors who use EaseBand and Easeflow with a parents or guardians help.</li>
                            </ul>
                        </section>

                        {/* Who This Policy Applies To */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Who This Policy Applies To
                            </h2>
                            <p>
                                This policy applies to anyone who uses EaseBand and Easeflow. This includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Users who are 18 or older and use EaseBand and Easeflow on their own.</li>
                                <li>Users between 13 and 18 who use EaseBand and Easeflow with a parents or guardians help and permission.</li>
                            </ul>
                            <p>
                                EaseBand and Easeflow are not intended for children under 13. We do not knowingly collect information from children under 13. If we learn that we have collected information from a child under 13 we will delete it.
                            </p>
                            <p>
                                When a parent or guardian allows a minor between 13 and 18 to use EaseBand and Easeflow the parent or guardian must review this policy and supervise the information the minor shares.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Information We Collect
                            </h2>
                            
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-white/90">Information you give us:</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Your name, email address, phone number and password when you create an account for EaseBand and Easeflow.</li>
                                    <li>Your billing address, shipping address and payment details when you purchase EaseBand or premium features of Easeflow.</li>
                                    <li>Profile information such as age, gender, height or weight if you choose to provide it which we use to personalise EaseBand and Easeflow.</li>
                                    <li>Communications, such as emails or messages you send us about EaseBand and Easeflow.</li>
                                </ul>
                            </div>

                            <div className="space-y-2 pt-2">
                                <h3 className="text-lg font-medium text-white/90">Information we collect automatically:</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Device information, such as device type, operating system and app version of EaseBand and Easeflow.</li>
                                    <li>Usage information, such as how you use Easeflow and which features you use.</li>
                                    <li>Log and technical information, such as your IP address and browser type when you use EaseBand and Easeflow.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Wellness and Health-Related Information */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Wellness and Health-Related Information
                            </h2>
                            <p>
                                EaseBand and Easeflow may collect wellness information, such as heat therapy sessions or vibration therapy sessions from EaseBand. This information may be treated as data under Indian law.
                            </p>
                            <p className="border-l-2 border-blue-500/30 pl-4 py-1 text-gray-400 italic">
                                EaseBand and Easeflow are intended for wellness purposes only. They are not a substitute for a doctor's advice. We do not use this information to diagnose or treat any condition.
                            </p>
                        </section>

                        {/* How We Use Your Information */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                How We Use Your Information
                            </h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To improve EaseBand and Easeflow.</li>
                                <li>To manage your account for EaseBand and Easeflow.</li>
                                <li>To process your orders and payments for EaseBand and Easeflow.</li>
                                <li>To personalise your wellness information and recommendations from EaseBand and Easeflow.</li>
                                <li>To communicate with you about your account or orders for EaseBand and Easeflow.</li>
                                <li>To keep EaseBand and Easeflow safe and secure.</li>
                                <li>To comply with the law and respond to lawful requests about EaseBand and Easeflow.</li>
                            </ul>
                        </section>

                        {/* How We Share Your Information */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                How We Share Your Information
                            </h2>
                            <p>
                                We do not sell your information. We may share your information with:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Service providers who help us run EaseBand and Easeflow including payment processors, delivery partners and cloud storage providers.</li>
                                <li>Government authorities, where required by law.</li>
                                <li>A new owner, if we sell or transfer our business related to EaseBand and Easeflow.</li>
                            </ul>
                            <p>
                                We require anyone we share your information with to protect it and use it for the purposes for which it was shared.
                            </p>
                        </section>

                        {/* Your Consent */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Your Consent
                            </h2>
                            <p>
                                By using EaseBand and Easeflow you consent to our collection, use and sharing of your information as described in this policy. If you are between 13 and 18 your parent or guardian must give this consent on your behalf.
                            </p>
                            <p>
                                You can withdraw your consent at any time by emailing us. However, this may mean we cannot provide you with EaseBand and Easeflow or parts of it.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Your Rights
                            </h2>
                            <p>
                                Under the Digital Personal Data Protection Act 2023 you have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Ask us to confirm whether we are processing your information from EaseBand and Easeflow.</li>
                                <li>Access your information from EaseBand and Easeflow.</li>
                                <li>Correct, complete or update your information from EaseBand and Easeflow.</li>
                                <li>Erase your information from EaseBand and Easeflow when it is no longer needed.</li>
                                <li>Withdraw your consent at any time.</li>
                                <li>Nominate another person to exercise these rights on your behalf.</li>
                                <li>File a complaint with us or with the Data Protection Board of India.</li>
                            </ul>
                            <p>
                                If you are a parent or guardian of a user between 13 and 18 you may exercise these rights on their behalf.
                            </p>
                            <p>
                                To exercise any of these rights please contact us at <a href="mailto:support@medcaretech.in" className="text-blue-400 hover:underline">support@medcaretech.in</a>.
                            </p>
                        </section>

                        {/* How Long We Keep Your Information */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                How Long We Keep Your Information
                            </h2>
                            <p>
                                We keep your information for long as your account is active or as long as we need it to provide EaseBand and Easeflow. When we no longer need your information, we will delete it or make it anonymous.
                            </p>
                        </section>

                        {/* How We Protect Your Information */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                How We Protect Your Information
                            </h2>
                            <p>
                                We use security practices and procedures to protect your information, including measures such as encryption and access controls. However, no method of storing or transmitting information is completely secure. We cannot promise that your information will always be perfectly safe.
                            </p>
                        </section>

                        {/* Data Transfers */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Data Transfers
                            </h2>
                            <p>
                                Your information may be processed on servers located outside India. Where this occurs, we take steps to ensure your information is protected in a manner consistent with this policy and Indian law.
                            </p>
                        </section>

                        {/* Cookies and Similar Technologies */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Cookies and Similar Technologies
                            </h2>
                            <p>
                                Our website and app may use cookies and similar technologies to remember your preferences and to understand how you use EaseBand and Easeflow so we can improve your experience. You can control cookies through your browser or device settings; however, some parts of EaseBand and Easeflow may not work properly if you disable them.
                            </p>
                        </section>

                        {/* Third-Party Links and Services */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Third-Party Links and Services
                            </h2>
                            <p>
                                EaseBand and Easeflow may link to websites or resources that we do not own or control. We are not responsible for the privacy practices of those parties. Please review their privacy policies before sharing your information with them.
                            </p>
                        </section>

                        {/* Children's Privacy */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Children's Privacy
                            </h2>
                            <p>
                                We do not knowingly collect information from children under 13. If you are a parent or guardian and believe your child under 13 has provided us with information please contact us so we can delete it.
                            </p>
                            <p>
                                For users between 13 and 18 we use information as described in this policy. We involve a parent or guardian as required under the terms and conditions.
                            </p>
                        </section>

                        {/* Changes to This Policy */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Changes to This Policy
                            </h2>
                            <p>
                                We may change this policy at any time. Changes will apply to your use of EaseBand and Easeflow from the date they are published. If you continue using EaseBand and Easeflow after changes are made you are agreeing to the updated policy. If you are between 13 and 18 your parent or guardian should review any changes on your behalf.
                            </p>
                        </section>

                        {/* Governing Law and Jurisdiction */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Governing Law and Jurisdiction
                            </h2>
                            <p>
                                This policy is governed by the laws of India. Any dispute arising from it will be subject to the jurisdiction of the courts, in the city where Medical Care and Technology is located.
                            </p>
                        </section>

                        {/* Contact Us */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Contact Us
                            </h2>
                            <p>
                                If you have any questions or messages regarding this policy, please reach out using the contact information provided above or email us directly at <a href="mailto:support@medcaretech.in" className="text-blue-400 hover:underline">support@medcaretech.in</a>.
                            </p>
                        </section>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export const TermsConditions = () => {
    return (
        <div className="bg-[#FAF9F6] min-h-screen text-neutral-800 selection:bg-neutral-800 selection:text-[#FAF9F6] [&_h2]:text-[#3B302C] [&_h3]:text-[#3B302C] [&_a]:text-[#B58B80] [&_a]:hover:text-[#8b6e60] [&_div.h-px]:bg-none [&_div.h-px]:bg-neutral-200/60">
            <SEO
                title="Terms and Conditions"
                description="Terms and Conditions for EaseBand and Easeflow by Medical Care & Technology."
                url="/terms"
            />

            <div className="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-0 w-full h-[600px] bg-[#B58B80]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-light tracking-[0.1em] font-serif mb-4 text-[#3B302C]">
                            Terms and Conditions
                        </h1>
                        <p className="text-sm md:text-base text-[#B58B80] font-light tracking-[0.2em] uppercase">
                            EaseBand and Easeflow
                        </p>
                        <p className="text-xs text-neutral-500 tracking-[0.1em] uppercase mt-2">
                            A Product of Medical Care & Technology
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-stone max-w-none space-y-10 text-neutral-600 font-light leading-relaxed text-sm md:text-base"
                    >
                        <section className="space-y-4">
                            <p>
                                Medical Care & Technology which we will refer to as Medical Care & Technology we, us our is the company behind EaseBand and Easeflow.
                            </p>
                            <p>
                                This document is about the rules for using the EaseBand device and the Easeflow companion application, which we call the Service and any other agreements or relationships you have with Medical Care & Technology.
                            </p>
                            <p>
                                You need to read this document because it is a binding agreement.
                            </p>
                            <p>
                                Our Service is provided by Medical Care & Technology.
                            </p>
                            <p>
                                If you have questions you can email us at <a href="mailto:support@medcaretech.in" className="text-blue-400 hover:underline">support@medcaretech.in</a> to contact us.
                            </p>
                        </section>

                        {/* Section Divider */}
                        <div className="h-px bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-transparent" />

                        {/* What You Should Know at a Glance */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                What You Should Know at a Glance
                            </h2>
                            <p>
                                Some rules may only apply to users like kids who use the Service with their parents help. We will always say so in the rule. If we do not say so the rule applies to everyone.
                            </p>
                        </section>

                        {/* Terms of Use */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Terms of Use
                            </h2>
                            <p>
                                These Terms apply to your use of the Service unless we say otherwise. There may be conditions for certain situations and we will note them in this document.
                            </p>
                            <p>
                                When you use our Service you are saying that:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>If you are 18 or older you can use the Service on your own.</li>
                                <li>If you are between 13 and 18 you can only use the Service with a parent or guardians help and permission. Your parent or guardian must agree to these Terms for you. They are responsible for what you do on the Service.</li>
                                <li>The Service is not for kids under 13. We do not let anyone under 13 use the Service.</li>
                                <li>You are not in a country that the government says we cannot do business with and you are not on a list of people we are not allowed to do business with.</li>
                            </ul>
                            <p>
                                When a parent or guardian lets a kid between 13 and 18 use the Service, the parent or guardian is in charge. They need to check any health information or advice from the EaseBand device and the Easeflow app and make sure the kid is using the Service safely.
                            </p>
                        </section>

                        {/* Account Registration */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Account Registration
                            </h2>
                            <p>
                                To use the Service, you or your parent or guardian can create an account by giving us honest information. You do not need an account to use some parts of the Easeflow app.
                            </p>
                            <p>
                                You are in charge of keeping your login information secret. You need to pick a password that's strong enough.
                            </p>
                            <p>
                                When you create an account you or your parent or guardian are saying that you will be responsible for everything that happens with that account.
                            </p>
                            <p>
                                If you think someone has gotten into your account or stolen your information you need to tell us right away.
                            </p>
                            <p>
                                Here are the rules for creating an account:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>You cannot use a computer program to create an account.</li>
                                <li>You can only have one account unless we say it is okay to have more.</li>
                                <li>If you are between 13 and 18 a parent or guardian must be in charge of your account.</li>
                                <li>You cannot share your account with someone unless we say it is okay.</li>
                            </ul>
                        </section>

                        {/* Account Termination */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Account Termination
                            </h2>
                            <p>
                                You or your parent or guardian can close your account. Stop using the Service at any time by emailing us.
                            </p>
                        </section>

                        {/* Account Deletion */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Account Deletion
                            </h2>
                            <p>
                                We can delete an account at any time if we think it is being used in a way that is not allowed or is not safe. This includes if we think someone under 13 is using the Service.
                            </p>
                            <p>
                                If we suspend or delete an account you will not get any money back. You still have to pay any fees you owe.
                            </p>
                        </section>

                        {/* The EaseBand Device and Easeflow App */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                The EaseBand Device and Easeflow App
                            </h2>
                            <p>
                                The EaseBand is a device that uses heat and vibration for therapy. The Easeflow app is used to control the device and look at wellness information.
                            </p>
                            <p className="border-l-2 border-blue-500/30 pl-4 py-1 text-gray-400 italic">
                                The Service is for wellness not for medical treatment. It is not a substitute for a doctor’s advice.
                            </p>
                            <p>
                                The EaseBand device is not registered as a ‘device’ under the Medical Device Rules, 2017.
                            </p>
                        </section>

                        {/* Content on the Service */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Content on the Service
                            </h2>
                            <p>
                                We or the people we work with provide all the content on the Service unless we say otherwise.
                            </p>
                            <p>
                                We try to make sure the content is legal and respectful. If you think your rights are being hurt, please tell us using the contact information we provide.
                            </p>
                            <p>
                                We own all the intellectual property rights for the content on the Service. You can only use it for what it is meant for.
                            </p>
                        </section>

                        {/* Access to External Resources */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Access to External Resources
                            </h2>
                            <p>
                                The Service may link to other websites or resources that are not ours. We are not responsible for what's on those sites or if they are available.
                            </p>
                        </section>

                        {/* Acceptable Use */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Acceptable Use
                            </h2>
                            <p>
                                You can only use the Service in the ways that are allowed by these Terms and the law. You are responsible for making sure you are not breaking any laws or hurting anyones rights.
                            </p>
                        </section>

                        {/* Terms and Conditions of Sale */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Terms and Conditions of Sale
                            </h2>
                            
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-white/90">Paid Products</h3>
                                <p>
                                    If you want to buy the EaseBand device or premium features of the Easeflow app you have to pay for them. We will tell you how much it costs and what the terms are on our website and in the app.
                                </p>
                            </div>

                            <div className="space-y-2 pt-2">
                                <h3 className="text-lg font-medium text-white/90">Product Description</h3>
                                <p>
                                    We will describe the EaseBand device and other products on our website and in the app. We can change the prices or descriptions at any time.
                                </p>
                                <p>
                                    The country where the EaseBand device is made is India by MCT – Medical Care & Technology.
                                </p>
                            </div>
                        </section>

                        {/* Order Submission */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Order Submission
                            </h2>
                            <p>
                                When you place an order:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>You are agreeing to pay for the product and any taxes or fees.</li>
                                <li>If we need you to do something to get the product you are agreeing to do that.</li>
                                <li>We will send you an email to confirm your order.</li>
                            </ul>
                        </section>

                        {/* Prices and Payment */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Prices and Payment
                            </h2>
                            <p>
                                When you check out you will see how much everything costs, including taxes and delivery. We will tell you what payment methods we accept.
                            </p>
                        </section>

                        {/* Delivery */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Delivery
                            </h2>
                            <p>
                                We will send the EaseBand device to the address you give us. Please check your order when it arrives and tell us if there are any problems.
                            </p>
                        </section>

                        {/* Cancellation, Return and Refund */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Cancellation, Return and Refund
                            </h2>
                            <p>
                                You can return the EaseBand device within 7 days of getting it unless we say you have more time. The device has to be like new and in its packaging.
                            </p>
                            <p>
                                If we agree to give you a refund we will put the money back on your payment method within 5 days.
                            </p>
                        </section>

                        {/* Warranty */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Warranty
                            </h2>
                            <p>
                                The EaseBand device has a warranty. We will tell you what it is on our website or in the product information.
                            </p>
                        </section>

                        {/* Indemnification */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Indemnification
                            </h2>
                            <p>
                                You agree to protect us and our partners from any claims that you do something or hurt someones rights while using the Service.
                            </p>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Limitation of Liability
                            </h2>
                            <p>
                                We are only responsible for what the law says we are responsible for.
                            </p>
                            <p>
                                You cannot sue us for more than the law allows unless it is for something that could hurt your life, health or safety or if we did something wrong on purpose.
                            </p>
                            <p>
                                The Service is provided "as is", "as available", which means we do not promise it will always work perfectly or be free of mistakes.
                            </p>
                        </section>

                        {/* Privacy */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Privacy
                            </h2>
                            <p>
                                To learn about how we collect, use and protect your information, including information about kids and their parents or guardians please read our Privacy Policy. The Privacy Policy is part of these Terms. It follows the rules of the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.
                            </p>
                        </section>

                        {/* Intellectual Property Rights */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Intellectual Property Rights
                            </h2>
                            <p>
                                We or our partners own all the intellectual property rights for the Service, including the names and logos of the EaseBand and Easeflow.
                            </p>
                        </section>

                        {/* Consumer Grievance Redressal */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Consumer Grievance Redressal
                            </h2>
                            <p>
                                If you have a complaint about something you bought you can contact our customer care team at: <a href="mailto:support@medcaretech.in" className="text-blue-400 hover:underline">support@medcaretech.in</a>. We will try to solve your problem within one month.
                            </p>
                        </section>

                        {/* Force Majeure */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Force Majeure
                            </h2>
                            <p>
                                We are not responsible if something happens that is beyond our control like a disaster or a problem with the power or internet.
                            </p>
                        </section>

                        {/* Changes to These Terms */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Changes to These Terms
                            </h2>
                            <p>
                                We can change these Terms at any time. When we make changes they will apply to your use of the Service from the date they are published. If you keep using the Service after we make changes you are agreeing to the updated Terms. If you do not agree with the changes you must stop using the Service. If you are between 13 and 18 years old your parent or guardian should look at the changes for you.
                            </p>
                        </section>

                        {/* Common Provisions */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Common Provisions
                            </h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>No waiver:</strong> If we do not enforce a right or provision this does not mean we give it up. If we waive something one time it does not mean we will always waive it or any other term.</li>
                                <li><strong>Service interruption:</strong> We may stop the Service for a while to do maintenance updates or make changes and we will tell you if the law says we have to. We may also stop the Service for good if the law allows it.</li>
                                <li><strong>Severability:</strong> If a part of these Terms is found to be invalid the rest of the Terms will still apply. We will replace the part with a new one that is valid and matches the original intent as closely as possible.</li>
                                <li><strong>Assignment:</strong> We can transfer our rights or responsibilities under these Terms. You cannot transfer your rights or responsibilities without asking us.</li>
                                <li><strong>Agreement:</strong> These Terms and the Privacy Policy are the whole agreement between you and us about the Service and they replace any previous agreements or understandings.</li>
                            </ul>
                        </section>

                        {/* Governing Law and Jurisdiction */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Governing Law and Jurisdiction
                            </h2>
                            <p>
                                These Terms are governed by the laws of India. If there is a dispute it will be decided by the courts in the city of New Delhi, India where we are located following the rules of the consumer protection law.
                            </p>
                        </section>

                        {/* Dispute Resolution */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Dispute Resolution
                            </h2>
                            <p>
                                Before going to court please contact us using the information we provided so we can try to resolve the issue. This does not affect your rights under the Consumer Protection Act of 2019.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-white tracking-wide">
                                Contact
                            </h2>
                            <p>
                                Please send us any messages, or any query at <a href="mailto:support@medcaretech.in" className="text-blue-400 hover:underline">support@medcaretech.in</a> to contact us.
                            </p>
                        </section>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
