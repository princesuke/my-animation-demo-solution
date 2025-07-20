import { useNavigate, useLocation } from "react-router";
import { useCallback } from "react";

/**
 * TransitionLink: ใช้แทน NavLink เพื่อ trigger อนิเมชั่นก่อนเปลี่ยน route
 * @param {string} to - path ที่จะไป
 * @param {function} onBeforeNavigate - callback ที่จะถูกเรียกก่อน navigate (ควร return promise หรือ delay)
 * @param {React.ReactNode} children - เนื้อหาในลิงก์
 * @param {string} className - className เพิ่มเติม
 * @param {any} rest - prop อื่นๆ
 */
export default function TransitionLink({
  to,
  onBeforeNavigate,
  children,
  className = "",
  ...rest
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = useCallback(
    async (e) => {
      e.preventDefault();
      if (onBeforeNavigate) {
        await onBeforeNavigate();
      }
      if (location.pathname !== to) {
        navigate(to);
      }
    },
    [navigate, to, onBeforeNavigate, location.pathname]
  );

  const isActive = location.pathname === to;
  const combinedClass = className + (isActive ? " active" : "");
  return (
    <a href={to} className={combinedClass} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
