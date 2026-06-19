import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JokerLabs — Every suit. One hand.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          fontFamily: "sans-serif",
          gap: "32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(26,110,219,0.14) 0%, rgba(0,201,167,0.05) 55%, transparent 75%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
          }}
        />

        {/* Icon — black rounded square + white lettermark, same as app/icon.svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
          viewBox="343 343 814 814"
        >
          {/* Rounded black background */}
          <clipPath id="bg">
            <path d="M343.6 418.6 343.6 1081.4C343.6 1122.8 377.2 1156.4 418.6 1156.4L1081.4 1156.4C1122.8 1156.4 1156.4 1122.8 1156.4 1081.4L1156.4 418.6C1156.4 377.2 1122.8 343.6 1081.4 343.6L418.6 343.6C377.2 343.6 343.6 377.2 343.6 418.6Z" />
          </clipPath>
          <rect x="343.6" y="343.6" width="813" height="813" rx="75" fill="#000000" />
          {/* White lettermark paths */}
          <path fill="#ffffff" d="M745.2 493.8C756.7 492.4 768.8 496.7 777.1 504.6C784.7 511.9 789 522 789.1 532.5C789.2 543 785.4 552.7 778 560.2C770.7 567.6 760.7 571.8 750.3 571.9C755.9 578.8 762.9 586.4 768.8 593.2C778.5 604.4 788.3 615.6 798.2 626.7L798.2 932.4C783.8 955.5 767 980.6 751.7 1003.2L749.3 1006.7C736.3 987.8 724.2 968.1 711.4 949.1C707.7 943.6 704 937.9 700.6 932.2L700.5 626.8L748.6 571.9C740 571.9 731.7 569.1 724.8 564C716.6 557.8 711.2 548.5 710 538.2C708.5 527.8 711.3 517.2 717.7 508.9C724.7 499.9 734.1 495.3 745.2 493.8Z" />
          <path fill="#ffffff" d="M918.9 607.8C921.8 607.6 924.7 607.6 927.7 607.8C951.7 608.9 970.3 618.6 986.3 636.2C966.4 639.8 949.9 646.4 935.3 661C920.9 675.5 911.9 694.6 910 715C909.3 722.2 909.5 730.7 909.5 738.1C889.3 740.1 874.8 745.9 859 758.9C845 770.8 837.6 784.1 831.4 801C831.2 795.2 831.4 788.3 831.4 782.5L831.5 747.7L831.4 717C831.4 702.5 830.8 691 834.4 676.7C837.9 662.6 844.8 649.6 854.5 638.7C871.3 619.7 893.7 609.4 918.9 607.8Z" />
          <path fill="#ffffff" d="M572.5 607.8C573.5 607.7 574.6 607.7 575.6 607.7C599.8 607.5 623.1 617.1 640.1 634.3C651.8 645.9 660.2 660.4 664.3 676.3C668.8 693.3 667.5 717.7 667.5 735.9L667.5 800.7C661.6 785.1 656.8 776.1 645.2 763.7C630.3 748.7 610.4 739.6 589.4 738C589.4 731.2 589.6 722.5 589.1 716C587.7 701.1 582.7 686.8 574.5 674.4C559.3 651.7 538.9 641.1 512.8 635.9C529.1 617.9 548.5 609.2 572.5 607.8Z" />
          <path fill="#ffffff" d="M905.7 742.7C906.7 742.6 908.6 742.5 909.6 742.5L909.8 863.8C902 871.3 890.8 880.5 882.5 887.8L834.4 931L831.4 933.6L831.4 859.4C831.4 845.6 830.6 823.5 833.1 810.9C835.8 797.9 841.4 785.6 849.5 775.1C863.5 757 882.9 745.6 905.7 742.7Z" />
          <path fill="#ffffff" d="M589.4 742.2C609.1 743.8 627.7 752.4 641.8 766.3C653.4 777.9 661.5 792.4 665.2 808.3C668.6 822.6 667.5 846.4 667.5 862L667.6 933.4C657.8 925.3 647.3 915.5 637.8 907L589.3 863.7Z" />
          <path fill="#ffffff" d="M1013.3 610.1C1027 609.4 1038.8 619.9 1039.6 633.6C1040.5 647.3 1030 659.1 1016.3 660C1002.5 660.9 990.6 650.4 989.8 636.6C989 622.8 999.5 610.9 1013.3 610.1Z" />
          <path fill="#ffffff" d="M481.3 610.2C495 608.5 507.4 618.3 509 632C510.6 645.7 500.8 658.1 487.1 659.7C473.5 661.2 461.1 651.5 459.5 637.8C457.9 624.2 467.7 611.8 481.3 610.2Z" />
        </svg>

        {/* Brand name + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontSize: "68px",
              fontWeight: "700",
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            JokerLabs
          </span>
          <span
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.5px",
            }}
          >
            Every suit. One hand.
          </span>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, #1a6edb, #00c9a7, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
