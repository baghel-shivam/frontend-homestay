import React, { useEffect } from 'react';
import { useRef } from 'react';

export default function Support() {
    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <div className='min-height'>
            <div ref={ref} tabIndex={0}></div>
            <section className='container-fluid Support'>
                <div className='support-child'>
                    <h1>Support</h1>
                    <hr />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum totam labore quidem veritatis autem impedit. Molestiae sit hic eaque voluptates temporibus nemo id, deserunt exercitationem excepturi laudantium debitis? Repellat, repudiandae velit dolor voluptate consequuntur fugiat amet officiis? Consequuntur impedit aspernatur est ratione vel enim nesciunt maiores quam consectetur non quos officiis labore illo dolore eius deserunt rerum unde, ipsam quidem iure. Dolorum perferendis reiciendis soluta! Consequatur repellat iste minima ducimus unde totam, laboriosam iure dignissimos voluptatum voluptatibus dolorem harum dolor error cupiditate eveniet non dolorum! Eos numquam vel nostrum quibusdam, reprehenderit debitis. Sunt fugiat quas illum quidem, ea maiores alias adipisci, labore soluta reprehenderit magnam at, illo earum ab dolorem! Facilis quas labore est vero ipsam libero? Explicabo debitis tempora culpa, nemo perferendis placeat dolor atque voluptate nam reiciendis aperiam molestias hic eum voluptas velit commodi id deserunt doloribus, eveniet aut saepe labore distinctio iure repudiandae. Doloribus, voluptates velit, unde cum vero delectus explicabo maiores ullam, et commodi reprehenderit tempore eum nam molestias eveniet eligendi obcaecati vitae labore blanditiis ratione. Corporis recusandae earum sed velit, odio est atque dicta fuga vel nisi dignissimos, mollitia nulla, quo veritatis laboriosam sequi ad doloremque commodi autem minus. Nisi corporis veniam, deserunt quasi, beatae, quod eaque ratione qui placeat est tempore repellendus hic aliquam doloremque molestiae? Soluta veniam iure molestias laborum debitis delectus perspiciatis itaque assumenda modi. Natus mollitia alias quas et expedita eius ex vel minima quibusdam ducimus corrupti, voluptatibus corporis consequatur dolores laudantium molestiae fuga vitae aspernatur ratione ea qui dolore? Facere ut, aliquid quaerat accusantium eveniet illo vitae tempore veniam numquam unde sint at libero neque eaque repellat quis perferendis? Aut, qui debitis? Facere laudantium et quo sunt, nisi harum nihil incidunt sequi praesentium consectetur a quibusdam vel molestias aliquam explicabo autem? Repellat consequatur ea porro? Beatae necessitatibus vitae perferendis aut.</p>
                </div>
            </section>
        </div>
    );
}
