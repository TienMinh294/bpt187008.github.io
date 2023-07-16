
console.log('%c* 𝑺𝑻𝑶𝑷 𝑪𝑶𝑷𝒀 𝑺𝑶𝑼𝑹𝑪𝑬 !', 'color: red; font-size: 50px; font-family: sans-serif; text-shadow: 1px 1px 5px #000;');
console.log('%c- Có vẻ như bạn đang cố tình ăn cắp mã nguồn của tôi </ Tien Minh >.', 'color: #444; font-size: 25px; font-family: sans-serif;');
console.log('%c- Đó là hành vi không tốt, cần source inbox facebook để xin.\n', 'color: #444; font-size: 25px; font-family: sans-serif;');

document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('overlay');
    var text = document.getElementById('text');
    var audio = new Audio('./music/hbd.mpeg');


    document.body.addEventListener('click', function () {
        audio.loop = true;
        audio.play();

        overlay.style.opacity = 0;
        overlay.style.pointerEvents = 'none';
        text.style.opacity = 0;
        text.style.pointerEvents = 'none';

        setTimeout(function () {
            overlay.style.display = 'none';
            text.style.display = 'none';

            document.body.style.overflow = 'auto';
            document.body.style.pointerEvents = 'auto';
        }, 500);
    });

    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
});

// Thiết lập sự kiện click cho document.body
document.body.addEventListener("click", function () {
    // Ẩn overlay
    overlay.style.display = "none";
    // Thêm mã JavaScript của bạn để bắt đầu phát nhạc hoặc thực hiện các hành động khác ở đây
    animationTimeline();
});

// var delay = 1;
// var duration = 0.5; 

// gsap.from(".profile-picturet2", duration, {
//   scale: 3.5,
//   opacity: 0,
//   x: 25,
//   y: -25,
//   rotationZ: -45,
//   delay: delay,
// });

// gsap.from(".profile-picturep2", duration, {
//   scale: 3.5,
//   opacity: 0,
//   x: 25,
//   y: -25,
//   rotationZ: -45,
//   delay: delay,
// });

// delay += duration; // Tăng độ trễ sau khi hiện lên ảnh profile-picturet2 và profile-picturep2

// // Dừng lại trong 1 giây trước khi hiện tiếp lớp tiếp theo
// gsap.to({}, 1, {
//   delay: delay,
// });

// // Hiệu ứng cho ảnh profile-picturet1 và profile-picturep1
// gsap.from(".profile-picturet1", duration, {
//   scale: 3.5,
//   opacity: 0,
//   x: 25,
//   y: -25,
//   rotationZ: -45,
//   delay: delay,
// });

// gsap.from(".profile-picturep1", duration, {
//   scale: 3.5,
//   opacity: 0,
//   x: 25,
//   y: -25,
//   rotationZ: -45,
//   delay: delay,
// });

// delay += duration; // Tăng độ trễ sau khi hiện lên ảnh profile-picturet1 và profile-picturep1

// // Dừng lại trong 1 giây trước khi hiện tiếp ảnh cuối cùng
// gsap.to({}, 2, {
//   delay: delay,
// });

// // Hiệu ứng cho ảnh cuối cùng
// gsap.from(".profile-picture", duration, {
//   scale: 3.5,
//   opacity: 0,
//   x: 25,
//   y: -25,
//   rotationZ: -45,
//   delay: delay,
// });


// animation timeline
const animationTimeline = () => {
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.1, {
        visibility: "visible"
    })
        .from(".one", 0.7, {
            opacity: 0,
            y: 10
        })
        .from(".two", 0.4, {
            opacity: 0,
            y: 10
        })
        .to(".one",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "+=2.5")
        .to(".two",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "-=1")
        .from(".three", 0.7, {
            opacity: 0,
            y: 10
        })
        .to(".three",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "+=2")
        .from(".four", 0.7, {
            scale: 0.2,
            opacity: 0,
        })
        .from(".fake-btn", 0.3, {
            scale: 0.2,
            opacity: 0,
        })
        .staggerTo(
            ".hbd-chatbox span",
            0.5, {
            visibility: "visible",
        },
            0.05
        )
        .to(".fake-btn", 0.1, {
            backgroundColor: "rgb(127, 206, 248)",
        })
        .to(
            ".four",
            0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
            "+=0.7")
        .from(".idea-1", 0.7, ideaTextTrans)
        .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
        .from(".idea-2", 0.7, ideaTextTrans)
        .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
        .from(".idea-3", 0.7, ideaTextTrans)
        .to(".idea-3 strong", 0.5, {
            scale: 1.2,
            x: 20,
            color: "#ff0000"

        })
        .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
        .from(".idea-4", 0.7, ideaTextTrans)
        .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
        .from(
            ".idea-5",
            0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
            "+=0.5"
        )
        .to(
            ".idea-5 span",
            0.7, {
            rotation: 90,
            x: 8,
        },
            "+=0.4"
        )
        .to(
            ".idea-5",
            0.7, {
            scale: 0.2,
            opacity: 0,
        },
            "+=2"
        )
        .staggerFrom(
            ".idea-6 span",
            0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
            0.2
        )
        .staggerTo(
            ".idea-6 span",
            0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
            0.2,
            "+=1"
        )
        .staggerFromTo(
            ".baloons img",
            2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
            0.2
        )
        .from(
            ".profile-picturet2",
            0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
            delay:0.5,
        },
        )
        .from(
            ".profile-picturep2",
            0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
            delay:0.5,
        },
        )
        .from(
            ".profile-picturet1",
            0.5, {
            scale: 2,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
            delay:0.5,
        },
        )
        .from(
            ".profile-picturep1",
            0.5, {
            scale: 2,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
            delay:0.5,
        },
        )
        .from(
            ".profile-picture",
            0.5, {
            scale: 0,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
            delay:0.5,
        },
        )
        .from(".svhat", 3, {
            x: -900,
            y: 500,
            rotation: -800,
            opacity: 0,
        })
        .staggerFrom(
            ".wish-hbd span",
            0.7, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
            0.1
        )
        .staggerFromTo(
            ".wish-hbd span",
            0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#fff",
            ease: Expo.easeOut,
        },
            0.1,
            "party"
        )
        .from(
            ".wish h5",
            0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
            "party"
        )
        .staggerTo(
            ".eight svg",
            1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        },
            0.3
        )
        .to(".six", 0.5, {
            opacity: 0,
            y: 30,
            zIndex: "-1",
        })
        .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
        .to(
            ".last-smile",
            0.5, {
            rotation: 90,
        },
            "+=1"
        );

    

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });

}
