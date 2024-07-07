// Written by Chlove and Snowkey contributors, licenced under the Apache 2.0 License
document.addEventListener('DOMContentLoaded', () => {
    interface OnboardingStep {
        title: string;
        text: string;
        imgSrc: string;
        imgEffect: string;
    }

    const onboardingSteps: OnboardingStep[] = [
        {
            title: "Welcome to Snowkey!",
            text: "Welcome to gladdos.lol, running on the Snowkey software!",
            imgSrc: "https://i.imgur.com/Qmo4qgL.png",
            imgEffect: "bounce"
        },
        {
            title: "Let's set up, your profile!",
            text: "Here we will guide you through the main features of Snowkey.",
            imgSrc: "https://i.imgur.com/aO2CQHf.png",
            imgEffect: "scale"
        },
        {
            title: "Step 3: Get Started",
            text: "Let's get started with setting up your Snowkey experience.",
            imgSrc: "https://i.imgur.com/Jh9cJgM.png",
            imgEffect: "rotate"
        }
    ];

    let currentStep: number = 0;

    const titleElement: HTMLElement | null = document.getElementById('onboarding-title');
    const textElement: HTMLElement | null = document.getElementById('onboarding-text');
    const imageElement: HTMLImageElement | null = document.getElementById('onboarding-image') as HTMLImageElement;
    const backBtn: HTMLButtonElement | null = document.getElementById('back-btn') as HTMLButtonElement;
    const nextBtn: HTMLButtonElement | null = document.getElementById('next-btn') as HTMLButtonElement;

    function updateOnboarding() {
        const { title, text, imgSrc, imgEffect } = onboardingSteps[currentStep];

        if (titleElement && textElement && imageElement) {
            titleElement.style.opacity = '0';
            textElement.style.opacity = '0';
            imageElement.style.opacity = '0';
            imageElement.style.transform = 'scale(0.9)';

            setTimeout(() => {
                if (titleElement && textElement && imageElement) {
                    titleElement.textContent = title;
                    textElement.textContent = text;
                    imageElement.src = imgSrc;

                    titleElement.style.opacity = '1';
                    textElement.style.opacity = '1';
                    imageElement.style.opacity = '1';
                    imageElement.style.transform = 'scale(1)';
                    applyImageEffect(imgEffect);
                }
            }, 500);
        }

        if (backBtn) {
            backBtn.disabled = currentStep === 0;
        }
        if (nextBtn) {
            nextBtn.textContent = currentStep === onboardingSteps.length - 1 ? 'Finish' : 'Next';
        }
    }

    function applyImageEffect(effect: string) {
        if (imageElement) {
            imageElement.style.animation = 'none';
            switch (effect) {
                case 'bounce':
                    imageElement.style.animation = 'bounce 2s infinite';
                    break;
                case 'scale':
                    imageElement.style.animation = 'scaleUp 2s infinite';
                    break;
                case 'rotate':
                    imageElement.style.animation = 'rotate 2s infinite';
                    break;
            }
        }
    }

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                updateOnboarding();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentStep < onboardingSteps.length - 1) {
                currentStep++;
                updateOnboarding();
            } else {
                // Handle the finish action
                alert('Onboarding complete!');
            }
        });
    }

    updateOnboarding();
});
