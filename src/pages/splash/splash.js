import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax';

import './splash.scss'
export default class splash extends Component {
    render() {
        return (
            <div class="splash">
                <div class="splash-splash splash-grid lb-tr">
                    <div className="image-panel">
                    <Parallax className="custom-class" y={[50, -50]} tagOuter="figure">
                    
                    </Parallax>
                    </div>
                    <div class="content-panel">
                        <div class="ontentc-EyKzVo">
                            <div class="lorem-ipsu--the-1500s font-class-1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                            standard dummy text ever since the 1500s
                            </div>
                            <div class="start-your-ctions-now font-class-2">Start your Genuine Connections now</div>
                        </div>
                        <div class="quote">
                            <div class="deep-and-g-rching-for font-class-4">
                            Deep and genuine connection with another human is seemingly what we all are searching for.
                            </div>
                        </div>
                        <div class="start-connections button primary right">Start Connections</div>
                    </div>
                </div>

                <div class="splash-two splash-grid tl-rb">
                    <div className="content-panel">
                        <h2 class="right-panel">Relationship Communication Management</h2>
                        <div class="content">
                            <div class="list">
                            Helps you to maintain a healthy relationship with family, friends, colleagues.
                            </div>
                            <div class="list">
                            Remind when to call an old friend of yours before losing them.
                            </div>
                            <div class="list">Set contact frequency suitable for the relationship</div>
                        </div>
                        
                    </div>
                    <Parallax className="custom-class" y={[100, -50]} tagOuter="figure">
                        <div className="image-panel"></div>
                    </Parallax>
                </div>

                <div class="splash-three splash-grid lb-tr">
                    <Parallax className="custom-class" y={[100, -50]} tagOuter="figure">
                        <div className="image-panel"></div>
                    </Parallax>
                        <div class="content-panel">
                        <h2 class="heading">Losing Friends while you are away?</h2>
                        <div class="content">
                            <div class="list">Set contact frequency lesser than 2 week</div>
                            <div class="list">We will notify you Priorly</div>
                            <div class="list">Keep your relationship healthy</div>
                        </div>
                    </div>
                    
                </div>
                <div class="splash-cta tl-rb second-section">
                    <Parallax className="custom-class" y={[100, -100]} tagOuter="figure">
                        <div className="image-panel"></div>
                    </Parallax>

                    
                        <div className="content-panel">
                        <div class="content">
                            <h2 class="heading">Record and Analyze your Connections now</h2>
                            <div class="list">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                            standard dummy text ever since the 1500s
                            </div>
                        </div>
                        <div class="start-connections button primary center">Start Connections</div>
                    </div>
                    
                </div>
                
                
            </div>
        )
    }
}
