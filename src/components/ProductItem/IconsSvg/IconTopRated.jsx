import React from 'react';
import { IconContainer, TopRatedIcon } from '../StyledProductItem';

export const IconTopRated = (props) => {
    return (
        <IconContainer>
            <TopRatedIcon>
                <svg height="100%" viewBox="0 0 512.002 512.002" width="100%">
                    <g>
                        <g>
                            <path d="m303.029 61.578c-5.378-1.295-10.771 2.01-12.065 7.378-1.294 5.369 2.009 10.771 7.378 12.065 81.052 19.539 137.659 91.493 137.659 174.979 0 99.252-80.747 180-180 180s-180-80.748-180-180c0-83.483 56.604-155.437 137.652-174.978 5.369-1.295 8.672-6.697 7.378-12.065-1.295-5.369-6.699-8.67-12.065-7.378-42.88 10.339-81.729 35.126-109.39 69.795-28.507 35.729-43.575 78.824-43.575 124.626 0 110.28 89.72 200 200 200s200-89.719 200-200c0-45.803-15.068-88.899-43.577-124.629-27.662-34.668-66.513-59.455-109.395-69.793z" />
                            <path d="m505.976 231.948-11.699-21.827 1.951-26.984c1.876-17.296-5.023-34.176-18.479-45.184l-19.42-15.902-7.639-23.012c-4.278-17.595-17.641-31.737-34.979-36.974l-23.971-7.242-18.358-21.22c-10.862-12.777-27.303-19.423-43.982-17.784l-24.88 2.479-24.457-12.269c-15.072-8.035-33.042-8.042-48.116-.001l-21.826 11.698-26.983-1.952c-17.303-1.876-34.177 5.024-45.184 18.479l-15.903 19.42-23.011 7.639c-17.596 4.278-31.738 17.641-36.975 34.978l-7.241 23.971-21.22 18.359c-12.776 10.862-19.426 27.3-17.785 43.982l2.479 24.88-12.269 24.457c-8.036 15.073-8.042 33.042-.002 48.117l11.699 21.826-1.952 26.984c-1.875 17.296 5.024 34.175 18.479 45.184l19.42 15.902 7.639 23.012c4.277 17.595 17.64 31.737 34.979 36.974l23.97 7.241 18.359 21.221c10.863 12.776 27.297 19.426 43.982 17.784l24.879-2.479 24.455 12.267c7.539 4.02 15.803 6.031 24.067 6.031 8.258 0 16.516-2.008 24.051-6.027l21.827-11.698 26.983 1.952c17.295 1.872 34.175-5.024 45.185-18.479l15.902-19.42 23.013-7.638c17.594-4.278 31.735-17.641 36.972-34.979l7.242-23.97 21.221-18.359c12.776-10.862 19.426-27.3 17.785-43.983l-2.48-24.878 12.268-24.457c8.036-15.074 8.044-33.044.004-48.119zm-17.695 38.786c-.044.082-.087.164-.128.246l-13.626 27.165c-.849 1.692-1.2 3.591-1.013 5.476l2.767 27.75c.998 10.147-3.053 20.157-10.902 26.831l-23.478 20.312c-1.432 1.239-2.482 2.858-3.029 4.67l-8.081 26.745c-3.221 10.664-11.972 18.863-22.837 21.396-.297.069-.591.152-.88.248l-26.174 8.687c-1.797.597-3.388 1.691-4.587 3.156l-17.74 21.666c-6.738 8.236-17.089 12.442-27.681 11.25-.132-.015-.265-.027-.396-.037l-30.062-2.174c-1.893-.136-3.777.266-5.445 1.16l-24.364 13.058c-9.188 4.9-20.162 4.88-29.357-.057-.082-.043-.164-.086-.246-.127l-27.164-13.626c-1.396-.7-2.932-1.062-4.484-1.062-.33 0-.661.016-.992.049l-27.75 2.765c-10.146 1.002-20.157-3.053-26.831-10.901l-20.312-23.478c-1.238-1.432-2.858-2.483-4.671-3.03l-26.745-8.079c-10.665-3.221-18.863-11.972-21.396-22.838-.069-.297-.152-.59-.248-.88l-8.687-26.175c-.596-1.797-1.69-3.387-3.155-4.586l-21.665-17.741c-8.236-6.738-12.442-17.086-11.25-27.68.015-.132.027-.264.037-.397l2.174-30.063c.137-1.888-.266-3.776-1.16-5.445l-13.059-24.362c-4.9-9.188-4.879-20.162.056-29.357.044-.081.086-.163.127-.245l13.626-27.165c.849-1.692 1.2-3.591 1.012-5.475l-2.765-27.752c-.998-10.147 3.053-20.157 10.902-26.831l23.478-20.312c1.432-1.239 2.482-2.858 3.03-4.67l8.08-26.746c3.221-10.664 11.972-18.862 22.838-21.396.297-.069.59-.152.88-.248l26.173-8.688c1.797-.596 3.387-1.69 4.586-3.155l17.742-21.666c6.738-8.235 17.089-12.439 27.68-11.249.132.015.264.027.396.037l30.062 2.174c1.883.134 3.776-.266 5.445-1.16l24.363-13.058c9.187-4.9 20.162-4.88 29.356.056.081.043.163.086.246.127l27.165 13.626c1.692.849 3.591 1.201 5.475 1.012l27.751-2.765c10.146-1 20.157 3.053 26.831 10.902l20.312 23.478c1.238 1.432 2.858 2.482 4.671 3.03l26.745 8.08c10.664 3.221 18.862 11.973 21.396 22.838.069.297.152.59.248.88l8.688 26.173c.597 1.797 1.69 3.387 3.155 4.586l21.666 17.741c8.236 6.738 12.441 17.085 11.249 27.68-.015.132-.027.264-.036.397l-2.174 30.063c-.137 1.888.266 3.776 1.159 5.445l13.059 24.363c4.901 9.19 4.88 20.164-.056 29.358z" />
                            <path d="m212.602 201.516c-1.604-3.38-5.039-5.723-9.029-5.723h-52.837c-5.523 0-10 4.477-10 10v151.366c0 5.523 4.477 10 10 10h52.837c4.145 0 7.7-2.521 9.216-6.114 7.623 1.07 15.476 3.238 23.652 5.502 12.292 3.403 25.001 6.922 38.206 6.922h57.729c17.846 0 32.307-9.461 38.684-25.31 3.106-7.722 3.65-15.736 1.835-22.445 3.32-2.985 6.126-6.701 8.248-11.04 4.301-8.792 5.16-18.679 2.722-27.006 4.544-4.39 7.934-10.187 9.706-17.022 1.657-6.39 1.628-12.695.154-18.158 9.02-5.306 15.095-14.946 15.095-25.808 0-8.519-3.317-16.369-9.341-22.103-5.784-5.506-13.488-8.539-21.692-8.539l-81.371.002c-6.182-7.755-8.106-18.279-4.586-26.75 7.224-17.386 6.776-32.103-1.449-47.717-6.106-11.589-22.524-23.127-36.323-21.157-8.341 1.192-14.376 7.087-16.146 15.771-.521 2.555-.664 5.315-.829 8.511-.408 7.884-.968 18.682-7.774 31.721-4.613 8.839-6.152 17.93-7.51 25.951-1.945 11.49-2.888 17.025-9.197 19.146zm-51.866 14.277h32.837v131.366h-32.837zm80.783-30.085c1.165-6.881 2.369-13.997 5.521-20.034 8.823-16.904 9.57-31.325 10.017-39.941.119-2.295.231-4.463.453-5.553.001-.007.003-.015.005-.022 3.469.048 12.006 4.731 15.171 10.739 5.478 10.396 5.66 18.723.676 30.721-4.495 10.818-4.157 23.371.289 34.532-4.865.677-8.613 4.842-8.613 9.893 0 5.522 4.478 10 10 10l102.749-.003c3.047 0 5.854 1.074 7.902 3.024 1.429 1.359 3.131 3.785 3.131 7.617 0 5.364-4.917 10.002-10.738 10.129l-25.739.56c-5.521.12-9.9 4.693-9.78 10.215.119 5.448 4.571 9.783 9.994 9.783.073 0 .147 0 .222-.002l21.436-.466c.699 1.981 1.063 5.76-.409 10.089-1.253 3.682-4.616 9.858-13.076 9.858-5.522 0-10 4.477-10 10s4.478 10 10 10c1.516 0 3.004-.094 4.46-.279.124 2.83-.458 6.145-2.011 9.319-1.836 3.752-5.465 8.226-12.327 8.226-5.522 0-10 4.477-10 10s4.478 10 10 10c1.035 0 2.059-.046 3.07-.137-.026 1.919-.416 4.318-1.507 6.942-1.568 3.774-6.661 12.551-20.037 12.551h-57.729c-10.487 0-21.359-3.01-32.869-6.197-9.159-2.536-18.55-5.134-28.205-6.294v-119.223c22.514-4.08 25.618-22.306 27.944-36.047z" />
                            <path d="m256.002 76.001c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10z" />
                        </g>
                    </g>
                </svg>
            </TopRatedIcon>
        </IconContainer>
    )
}