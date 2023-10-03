import "./portfolio.css"
import { useState } from "react"

const Portfolio = () => {
    const [toggleState, setToggleSet] = useState(0);

    const toggleTap = (index) => {
        setToggleSet(index);
    }

    return (
        <section className="section portfolio" id="portfolio">
            <h2 className="section-title">
                What can be done
            </h2>
            <span className="section-subtitle">
                Portfolio
            </span>

            <div className="portfolio-container container grid">
                <div className="portfolio-content">
                    <div className="portfolio-text">
                    قصتنا لهذا اليوم بعنوان : خطوتين من الألف ميل. تبدأ قصتنا بمرور سنتين، سعياً وجهداً، تخطيطاً وتنفيذاً.. كل ذلك قد وُضِع تحت   
                    </div>

                    <span className="portfolio-button" onClick={ ()=> toggleTap(1)}>المزيد<i className="uil uil-arrow-left portfolio-button-icon"></i></span>

                    <div className={toggleState === 1 ? "portfolio-modal active-modal" : "portfolio-modal"}>
                        <div className="portfolio-modal-content">
                            <i onClick={ ()=> toggleTap(0)} className="uil uil-times portfolio-modal-close"></i>

                            <p className="portfolio-modal-description">
                            قصتنا لهذا اليوم بعنوان : خطوتين من الألف ميل. تبدأ قصتنا بمرور سنتين، سعياً وجهداً، تخطيطاً وتنفيذاً.. كل ذلك قد وُضِع تحت سقف الحب والتعاون. علمنا المركز ان لا وجود للمشاحنات، ولا انتساب عمل لشخص ما، كلنا هنا ناجحون، كلنا هنا فائزون، وجائزتنا هي وجودنا في هذا الكيان. 
                            ، ويسرنا ف المركز الجامعى للتطوير المهنى  ومن ضمن احتفالياتنا بمرور سنتين على تأسيس منزلنا الثاني، ان نشارك فى تنظيم الملتقى الأول للابتكار والحاضنات . 
                            تحت رعاية أ.د/شريف يوسف خاطر - رئيس الجامعة
                            وريادة أ.د/أشرف طارق حافظ - نائب رئيس الجامعة للدراسات العليا والبحوث .
                            العمل ليس بنتيجته ، بل بعيش لحظاته ♥️، فلنترككم مع اهم لحظات هذا اليوم

                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="portfolio-content">
                    <div className="portfolio-text">
                    أتينا وكلنا فخر واعتزاز، نزف التهاني لمن جد وحصد ثمرة اجتهاده، هنيئا ل د. هبه سمير، اخصائية التطوير المهني في المركز الجامعي بكلية الهندسة
                    </div>

                    <span className="portfolio-button" onClick={ ()=> toggleTap(2)}>المزيد<i className="uil uil-arrow-left portfolio-button-icon"></i></span>

                    <div className={toggleState === 2 ? "portfolio-modal active-modal" : "portfolio-modal"}>
                        <div className="portfolio-modal-content">
                            <i onClick={ ()=> toggleTap(0)} className="uil uil-times portfolio-modal-close"></i>

                            <p className="portfolio-modal-description">
                            أتينا وكلنا فخر واعتزاز، نزف التهاني لمن جد وحصد ثمرة اجتهاده، هنيئا ل د. هبه سمير، اخصائية التطوير المهني في المركز الجامعي بكلية الهندسة، وقدوتنا في العمل والعطاء، لحصولها علي درجة الدكتزراة، متمنين لها مسيرة حافلة بالإنجازات  
                            </p>
                        </div>
                    </div>
                </div>

                <div className="portfolio-content">
                    <div className="portfolio-text">
                        خطوتنا نحو اخر خطوة تقترب. <br />
                        خطوة رفع القبعة لكل مرتقب. <br />
                        اتمها الله علينا بدوام النعم.<br /> 
                    </div>

                    <span className="portfolio-button" onClick={ ()=> toggleTap(3)}>المزيد<i className="uil uil-arrow-left portfolio-button-icon"></i></span>

                    <div className={toggleState === 3 ? "portfolio-modal active-modal" : "portfolio-modal"}>
                        <div className="portfolio-modal-content">
                            <i onClick={ ()=> toggleTap(0)} className="uil uil-times portfolio-modal-close"></i>

                            <p className="portfolio-modal-description">
                            خطوتنا نحو اخر خطوة تقترب.<br />
                            خطوة رفع القبعة لكل مرتقب. <br />
                            اتمها الله علينا بدوام النعم. <br /> 
                            باب الخريجين يانديك، اقترب. <br /> 

                            الينا التهاني تزف، والمباركات ترف، مرحلة بكامل ما فيها تنتهي، فرحة التخرج واستلام الملف. <br />

                            ليست صفحة، بل فصل كامل في كتاب حياتنا، فصل دام 16 عاما ينتهي اليوم، فصل مليء بذكريات لا يمكن أن يأتي عوضها.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="portfolio-content">
                    <div className="portfolio-text">
                    هو انا لسه همتحن تاني! دا انا مصدقت ان ثانوية عامة خلصت
                    ثانية وحده بس، امتحانك المرادي عشان تدخل كلية من كليات الابداع واللي هتميزك عن غيرك. 
                    </div>

                    <span className="portfolio-button" onClick={ ()=> toggleTap(4)}>المزيد<i className="uil uil-arrow-left portfolio-button-icon"></i></span>

                    <div className={toggleState === 4 ? "portfolio-modal active-modal" : "portfolio-modal"}>
                        <div className="portfolio-modal-content">
                            <i onClick={ ()=> toggleTap(0)} className="uil uil-times portfolio-modal-close"></i>

                            <p className="portfolio-modal-description">
                                هو انا لسه همتحن تاني! دا انا مصدقت ان ثانوية عامة خلصت
                                ثانية وحده بس، امتحانك المرادي عشان تدخل كلية من كليات الابداع واللي هتميزك عن غيرك. <br />
                                امتحان قدرات كليات الفنون واقسامها هو اول خطوة لبداية مسيرتك الدراسية، وعشان تجتازه بسهوله محتاج يبق عندك خبرة كويسه فالمجال،وبعض المهارات عشان تدخل بالمرتاح. <br />
                                كل دا وبالتفصيل هتلاقيه ف الكورس عندنا، كل اللي محتاج تتعلمه من الصفر، وبدون اي خبرة فالمجال احنا هنعلمك من اول مسكة القلم. <br />
                                والخبرة متجيش غير من خبرة وعشان كدا اللي هيقدم معانا بشمهندسة فنون عمارة : روفيدا قشقوش. <br />
                                عدد محاضرات الكورس : محاضرة تعريفية عن المجال وتخصصاته(مجانية) وبعدها 4 محاضرات من ضمنهم محاضرة مراجعه قبل الامتحان. <br />
                                الحجز من دلوقتي والبداية هتتحد بعد امتحاناتك وربنا معاك ي هندسة المستقبل
                                متستناش وخد فرصتك، سجل هنا.<br />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="portfolio-content">
                    <div className="portfolio-text">
                    خطوة لامعه في مساركم، هي خطوة الالتحاق بتدريب مهارات التوظيف المقام فالمركز الجامعي للتطوير المهني بكلية الهندسة ، وصلة من التهاني  
                    </div>

                    <span className="portfolio-button" onClick={ ()=> toggleTap(5)}>المزيد<i className="uil uil-arrow-left portfolio-button-icon"></i></span>

                    <div className={toggleState === 5 ? "portfolio-modal active-modal" : "portfolio-modal"}>
                        <div className="portfolio-modal-content">
                            <i onClick={ ()=> toggleTap(0)} className="uil uil-times portfolio-modal-close"></i>

                            <p className="portfolio-modal-description">
                            خطوة لامعه في مساركم، هي خطوة الالتحاق بتدريب مهارات التوظيف المقام فالمركز الجامعي للتطوير المهني بكلية الهندسة ، وصلة من التهاني لنا رلكم، بالوصول لنهاية هذه اادور والتي تحتل رقم 75، لولا ثقتكم وتفانيكم في التدريب لما وصلنا لهذا الإنجاز شكرا لكل من ساهم لنيل هذا الهدف، وسنسعى دوما للوصول للأفضل، من اجلكم وجدنا ولأجلكم نجتهد وبكم نتطور  
                            </p>
                        </div>
                    </div>
                </div>

                <div className="portfolio-content">
                    <div className="portfolio-text ltr">
                    To begin with, it is worth noting that technology has significantly improved the quality of equipment
                    </div>

                    <span className="portfolio-button" onClick={ ()=> toggleTap(6)}><i className="uil uil-arrow-right portfolio-button-icon"></i>Learn more</span>

                    <div className={toggleState === 6 ? "portfolio-modal active-modal" : "portfolio-modal"}>
                        <div className="portfolio-modal-content">
                            <i onClick={ ()=> toggleTap(0)} className="uil uil-times portfolio-modal-close"></i>

                            <p className="portfolio-modal-description ltr">
                                To begin with, it is worth noting that technology has significantly improved the quality of equipment available for use in our hobbies and leisure activities to let us discover the world . 
                                In the past, amateur photographers had to rely on film cameras and developed their own pictures in a darkroom. 
                                Nowadays, anyone with a smartphone or digital cameras can take high-quality photos and edit them with a variety of apps.
                                An obvious result of this is that people are now able to save and adapt with more amount of data easily. 
                                This is particularly true of hobbies requiring some skill or training.
                                approach the game with a level of seriousness and dedication that was previously only seen in professional players. 
                                The same can be said for other activities such as cooking, gardening, and so on.

                                While the impact of technology on our hobbies and leisure activities is generally positive, some potentially negative implications should not be ignored.
                                For example how technology can affect social interaction.  In the past, people would often have to meet in person to socialize and share their moments. 
                                now that people can communicate and be interactive but online, they can do so without ever meeting up in person. 
                                This could lead people to spending less time socializing with others face-to-face, which could hurt their social skills.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="portfolio-content">
                    <div className="portfolio-text ltr">
                    These days, we live in an era of rapid development that is accompanied by changing habits and behaviors, especially for children.
                    </div>

                    <span className="portfolio-button" onClick={ ()=> toggleTap(7)}><i className="uil uil-arrow-right portfolio-button-icon"></i>Learn more</span>

                    <div className={toggleState === 7 ? "portfolio-modal active-modal" : "portfolio-modal"}>
                        <div className="portfolio-modal-content">
                            <i onClick={ ()=> toggleTap(0)} className="uil uil-times portfolio-modal-close"></i>

                            <p className="portfolio-modal-description ltr">
                            These days, we live in an era of rapid development that is accompanied by changing habits and behaviors, especially for children.
                            My kids, for example, show a lot of changes in their habits, and typically don't even understand the meaning of respect. 
                            So, in order to protect our children from the risk of transmitting unwelcome and sometimes informal habits, we (as a father) must discuss with them more, and give them more room to express their ideas and concepts.
                            Our good manners should be inherited from us to them, and they can be acquired from their parents through situations. 
                            So that we can avoid the speed of spreading unsavory behaviors.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="portfolio-content">
                    <div className="portfolio-text">
                        لمسة ابداع معاصرة ، بكدا نقدر نوصف صاحب مهارة التصميم التقني والمحاكاة الافتراضية، واللي من خلاله بنقدر نشوف ابعاد الواقع قبل وجوده على الارض حقيقة. 
                    </div>

                    <span className="portfolio-button" onClick={ ()=> toggleTap(5)}>المزيد<i className="uil uil-arrow-left portfolio-button-icon"></i></span>

                    <div className={toggleState === 5 ? "portfolio-modal active-modal" : "portfolio-modal"}>
                        <div className="portfolio-modal-content">
                            <i onClick={ ()=> toggleTap(0)} className="uil uil-times portfolio-modal-close"></i>

                            <p className="portfolio-modal-description">
                                لمسة ابداع معاصرة ، بكدا نقدر نوصف صاحب مهارة التصميم التقني والمحاكاة الافتراضية، واللي من خلاله بنقدر نشوف ابعاد الواقع قبل وجوده على الارض حقيقة. 
                                وعشان نوفر لأصحاب الإبداع الدعم الكافي، وبالتعاون، بنعلن عن اهم واكبر حدث يخص عالم التصميم والمحاكاة. 
                                Cad/Cam application Seminar
                                واللي فيه هنفتح ابواب مجال لمناقشة الاتي <br />
                                What’s New in The Era of Cad Cam Applications  <br />

                                3DExperince New Updates in The World of Mechanical Design <br />

                                The Supportive Foundations of Industry 4.0 <br />
                                معادنا معاكم يوم الأحد 4 ديسمبر الساعه 12 في قاعة مجدي أبو ريان
                                للتسجيل معانا من خلال، وتابعونا لبقية تفاصيل يومنا، وبداية إبداعكم
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Portfolio