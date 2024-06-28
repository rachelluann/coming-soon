import { useState } from "react";

import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function App() {
  const [form, setForm] = useState({
    email: "",
  });
  const [signedUp, setSignedUp] = useState(false);

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "waitlist", ...form }),
      });
      if (response.ok) {
        setSignedUp(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="isolate">
      <div className="relative pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[28rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FAD03B] to-[#CE5700] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[64rem]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-yellow-600">
                ✨ New Product Alert! ✨
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Coming Soon
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We're working on something new and exciting. We can't wait to
                share it with you. It's going to blow your mind!
              </p>
            </div>
          </div>
        </div>

        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            {signedUp ? (
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      You're on the waitlist! 🥳
                    </h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>We'll let you know when we're ready to launch.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (


      <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
  <style type="text/css">
        #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: px;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
    <form action="https://gmail.us14.list-manage.com/subscribe/post?u=841f878f690258ab42fb6f554&amp;id=b1e073f5a4&amp;f_id=0021b4e5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll"><h2>Stay in the loop</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div>
<div hidden=""><input type="hidden" name="tags" value="40186261"></div>
        <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div>
    <div aria-hidden="true" style="position: absolute; left: -5000px;">
        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
        <input type="text" name="b_841f878f690258ab42fb6f554_b1e073f5a4" tabindex="-1" value="">
    </div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                <p style="margin: 0px auto;"><a href="http://eepurl.com/iSRVTI" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
            </div>
        </div>
    </div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>

                  
                  <svg
                    className="pointer-events-none absolute right-0 h-48 w-48 -translate-y-3/4 select-none opacity-20 sm:h-96 sm:w-96 sm:-translate-y-1/2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <text
                      x="50%"
                      y="50%"
                      fontSize="20"
                      fill="currentColor"
                      textAnchor="middle"
                      alignmentBaseline="middle"
                    >
                      🚀
                    </text>
                  </svg>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
